import ArrowRight from "../../assets/icons/ArrowRight.svg";
import Button from "../Button";
import CardImage from "../CardImage";
import styles from "./style.module.css";

interface IContainer {
  title: string;
  description: string;
  buttonText: string;
  textColor?: string;
  textButtonColor?: string;
  imageSrc?: any;
  isReverse?: boolean;
  stylesContent?: string;
  stylesButton?: string;
  stylesTitle?: string;
  stylesDescription?: string;
  stylesImage?: string;
}
const Container: React.FC<IContainer> = ({
  title,
  description,
  buttonText,
  imageSrc,
  isReverse = false,
  textButtonColor = "white",
  textColor = "white",
  stylesContent,
  stylesButton,
  stylesTitle,
  stylesDescription,
  stylesImage,
}) => {
  return (
    <div
      className={`${styles.section} flex items-center ${isReverse && "lg:flex-row-reverse"}`}
    >
      <div className={`${styles.content} ${stylesContent}`}>
        <h2
          className={`text-h2 text-${textColor} font-bold leading-tight ${stylesTitle}`}
        >
          {title}
        </h2>
        <p
          className={`text-p2-regular text-${textColor} mt-6 mb-14 ${stylesDescription}`}
        >
          {description}
        </p>
        <Button
          className={`bg-light-blue text-${textButtonColor} ${stylesButton} mb-24 lg:mb-0`}
          icon={ArrowRight}
        >
          {buttonText}
        </Button>
      </div>
      {imageSrc && (
        <div className={`${stylesImage}`}>
          <CardImage imageSrc={imageSrc} />
        </div>
      )}
    </div>
  );
};

export default Container;
