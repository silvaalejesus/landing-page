import { useMediaQuery } from "react-responsive";
import Card from ".";
import { cardsData } from "../../mocks/cardsData";
import Carousel from "./Carousel";
import styles from "./style.module.css";

const PriceBoard = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isMobile ? (
        <Carousel />
      ) : (
        <div className={styles.inner}>
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      )}
    </>
  );
};

export default PriceBoard;
