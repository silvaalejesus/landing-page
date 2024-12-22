import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { opinions } from "../../mocks/clientOpinion";
import CardClient from "./CardClient";
import PageIndicator from "./PageIndicator";

const Card = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <motion.div
        ref={carousel}
        className="carousel relative overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-8"
          drag="x"
          initial={false}
          // animate={controls}
          dragConstraints={{
            right: 0,
            left: -width,
          }}
        >
          {opinions.map((opinion, index) => (
            <CardClient key={index} {...opinion} />
          ))}
        </motion.div>
        <div>
          <PageIndicator activeIndex={1} totalSlides={3} />
        </div>
      </motion.div>
    </>
  );
};

export default Card;
