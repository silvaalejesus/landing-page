import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cardsData } from "../../mocks/cardsData";
import Card from "./index";
import styles from "./style.module.css";

const Carousel = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  // calcula a largura do carrossel para saber ate onde pode ir o scrool
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  // aqui calcula a posicao do card para iniciar o carrosel no card do meio ao inves do primeiro card
  useEffect(() => {
    const cardWidth = 360; // Ajuste de acordo com a largura do seu card
    const initialX = (-(cardsData.length - 1) / 2) * cardWidth; // Calcula a posição inicial para centralizar o carrossel

    controls.start({ x: initialX });
  }, [cardsData, controls]);

  return (
    <motion.div
      className={`${styles.carousel}`}
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className={`${styles.inner}`}
        drag="x"
        initial={false}
        animate={controls}
        dragConstraints={{ right: 0, left: -width }}
      >
        {cardsData.map((card, index) => (
          <motion.div key={index}>
            <Card key={index} {...card} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
