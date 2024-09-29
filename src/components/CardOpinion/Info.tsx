const Info: React.FC<{
  author: string;
  jobTitle: string;
  isBlueCard?: boolean;
}> = ({ author, jobTitle, isBlueCard }) => {
  return (
    <div>
      <p
        className={`p1-semibold font-semibold ${isBlueCard && "text-primary-200"}`}
      >
        {author}
      </p>
      <p className={`p3-regular ${isBlueCard && "text-secondary-100"}`}>
        {jobTitle}
      </p>
    </div>
  );
};

export default Info;
