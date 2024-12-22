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
  cardWidth?: boolean;
  isReverse?: boolean;
  stylesContent?: string;
  stylesButton?: string;
}
const Container: React.FC<IContainer> = ({
  title,
  description,
  buttonText,
  imageSrc,
  cardWidth,
  isReverse = false,
  textButtonColor = "white",
  textColor = "white",
  stylesContent,
  stylesButton,
}) => {
  return (
    <div
      className={`${styles.section} flex items-center ${isReverse && "lg:flex-row-reverse"}`}
    >
      <div className={`${styles.content} ${stylesContent}`}>
        <h2 className={`text-h2 text-${textColor} font-bold leading-tight `}>
          {title}
        </h2>
        <p className={`text-p2-regular text-${textColor} mt-6 mb-14`}>
          {description}
        </p>
        <Button
          className={`bg-light-blue text-${textButtonColor} ${stylesButton}`}
          icon={ArrowRight}
        >
          {buttonText}
        </Button>
      </div>
      {imageSrc && (
        <div>
          <CardImage imageSrc={imageSrc} />
        </div>
      )}
    </div>
  );
};

// Container.defaultProps = {
//   title: "Get More Done with Whitepace",
//   description:
//     "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
//   buttonText: "Try Whitepace free",
//   icon: ArrowRight, // Assuming ArrowRight is defined elsewhere
//   imageSrc:
//     "https://img.freepik.com/fotos-premium/um-passaro-azul-com-cauda-preta-e-branca-gerada-por-ia_982893-289.jpg",
// };

export default Container;
