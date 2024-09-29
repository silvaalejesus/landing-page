const Avatar: React.FC<{ imageSrc?: string }> = ({ imageSrc }) => {
  return <img src={imageSrc} alt="Avatar" className="avatar" />;
};

export default Avatar;
