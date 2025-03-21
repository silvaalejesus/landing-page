import Avatar from "./Avatar";
import IconQuote from "./IconQuote";
import Info from "./Info";
import styles from "./styles.module.css";

interface ICardProps {
  citation: string;
  author: string;
  jobTitle: string;
  imageSrc: string;
  isBlue?: boolean;
}

const CardClient: React.FC<ICardProps> = ({
  citation,
  author,
  jobTitle,
  imageSrc,
  isBlue = false,
}) => {
  return (
    <div
      className={`${styles.container} ${isBlue && "bg-light-blue"} min-w-[30%] flex-1`}
    >
      <div className="citation">
        <IconQuote isBlue={isBlue} />
        <p className={`${styles.citation} ${isBlue && "text-white"}`}>
          {citation}
        </p>
      </div>
      <div className="border-[1px] mb-[60px]"></div>
      <div className={styles.author_info}>
        <Avatar imageSrc={imageSrc} />
        <Info isBlueCard={isBlue} author={author} jobTitle={jobTitle} />
      </div>
    </div>
  );
};

export default CardClient;
