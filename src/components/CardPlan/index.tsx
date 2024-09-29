import React from "react";
import Button from "../Button";
import IconCheck from "./IconCheck";
import styles from "./style.module.css";

interface ICardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
  button?: () => void;
  buttonLabel?: string;
}
const Card: React.FC<ICardProps> = ({
  title,
  description,
  price,
  features,
  isHighlighted,
  buttonLabel,
}) => {
  return (
    <div
      className={`${styles.card} ${isHighlighted ? styles.highlighted : ""}`}
    >
      <p className={styles.card_title}>{title}</p>
      <h4 className={styles.card_price}>{price}</h4>
      <p className={styles.card_description}>{description}</p>
      <ul className={styles.card_features}>
        {features.map((feature) => (
          <li key={feature}>
            <IconCheck isHighlight={isHighlighted} />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
      <Button className={"border-solid border-2 border-sky-500"}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default Card;
