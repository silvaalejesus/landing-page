import Avatar from "./Avatar";
import IconQuote from "./IconQuote";
import Info from "./Info";

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
      className={`card py-[60px] px-6 shadow-lg rounded-10 ${isBlue && "bg-light-blue"}`}
    >
      <div className="citation">
        <IconQuote isBlue={isBlue} />
        <p className={`pt-8 pb-10 ${isBlue && "text-white"}`}>{citation}</p>
      </div>
      <div className="border-[1px] mb-[60px]"></div>
      <div className="author-info flex gap-[42px] items-center">
        <Avatar imageSrc={imageSrc} />
        <Info isBlueCard={isBlue} author={author} jobTitle={jobTitle} />
      </div>
    </div>
  );
};

export default CardClient;
