import React from "react";
import styles from "./style.module.css";

interface CardProps {
  imageSrc: string;
  title?: string;
}

const CardImage: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.cardImage} />
    </div>
  );
};

export default CardImage;
