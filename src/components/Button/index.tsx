interface IButtonProps {
  children: React.ReactNode;
  icon?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  icon,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p2-medium py-4 px-10 rounded-8 flex items-center gap-2.5 ${className} max-w-full`}
    >
      <p>{children}</p>
      {icon && <img width={15} height={15} src={icon} />}
    </button>
  );
};

export default Button;
