import { ReactElement } from "react";
interface ButtonProps {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const sizeStyles = {
  small: "py-1 px-2",
  medium: "py-2 px-4",
  large: "py-2 px-8",
};

const defaultStyles = "rounded-md font-sans flex items-center cursor-pointer transition duration-300 ease-in-out hover:scale-110";

export const Button = ({variant,text,startIcon,size,endIcon,onClick}: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[variant]} ${defaultStyles} ${
        sizeStyles[size]
      }`} onClick={onClick}
    >
      {startIcon ? <div className="pr-2">{startIcon}</div> : null}
      {text}
      {endIcon}
    </button>
  );
};
