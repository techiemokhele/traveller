import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  customStyle: string;
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
      className={`flexCenter gap=3 rounded-full border ${variant} ${customStyle}`}
    >
      {icon && (
        <>
          <Image src={icon} width={22} height={22} alt={title} />
          &nbsp;
        </>
      )}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default ButtonComponent;
