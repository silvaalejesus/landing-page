import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { opinions } from "../../mocks/clientOpinion";
import CardClient from "./CardClient";
import PageIndicator from "./PageIndicator";

const Card = () => {
  const carousel = useRef<HTMLElement | null>(null);
  const [_, setWidth] = useState<number | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(opinions.length / cardsPerPage);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (carousel.current) {
        const scrollLeft = carousel.current.scrollLeft;
        const cardWidth = 498; // Largura fixa para cada card
        const newPage = Math.round(scrollLeft / (cardWidth * cardsPerPage)); // Ajuste para página
        setCurrentPage(newPage);
      }
    };

    const currentCarousel = carousel.current; // Mantém referência ao carrossel atual

    currentCarousel?.addEventListener("scroll", handleScroll); // Ouvinte de evento de rolagem

    return () => {
      currentCarousel?.removeEventListener("scroll", handleScroll); // Remove o ouvinte ao desmontar
    };
  }, []); // Executa apenas uma vez na montagem e desmontagem do componente

  const handleDrag = () => {
    if (carousel.current) {
      const scrollLeft = carousel.current.scrollLeft;
      const cardWidth = carousel.current.offsetWidth / cardsPerPage; // Largura de um card
      const newPage = Math.round(scrollLeft / cardWidth);
      setCurrentPage(newPage);
    }
  };

  const handleIndicatorClick = (page: any) => {
    setCurrentPage(page);
    if (carousel.current) {
      carousel.current.scrollTo({
        left: page * carousel.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const cardWidth = 498; // Largura fixa para cada card
  console.log("currentPage", currentPage);
  return (
    <>
      <motion.div
        ref={carousel}
        className="carousel relative overflow-hidden p-5"
        style={{ width: `${cardWidth * 3}px` }} // Largura do carrossel = 3 cards
        whileTap={{ cursor: "grabbing" }}
        onDrag={handleDrag}
      >
        <motion.div
          className="flex gap-8"
          drag="x"
          initial={false}
          dragConstraints={{
            right: 0,
            left: -(cardWidth * (opinions.length - 3)), // Ajusta o limite de arrasto
          }}
          style={{ width: `${cardWidth * opinions.length}px` }} // Largura total dos cards
        >
          {opinions.map((opinion, index) => (
            <div key={index} style={{ width: `${cardWidth}px` }}>
              {" "}
              {/* Largura fixa para cada card */}
              <CardClient {...opinion} />
            </div>
          ))}
        </motion.div>
      </motion.div>
      <div>
        <PageIndicator
          currentPage={currentPage}
          totalPages={totalPages}
          onClick={handleIndicatorClick}
        />
      </div>
    </>
  );
};

export default Card;
