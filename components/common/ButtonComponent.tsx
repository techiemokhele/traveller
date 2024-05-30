import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  customStyle?: string;
  onClick?: () => void;
};

const ButtonComponent = ({
  type,
  title,
  icon,
  variant,
  onClick,
  customStyle,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flexCenter gap=3 rounded-full border ${customStyle} ${variant}`}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default ButtonComponent;
