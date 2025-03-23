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
  large: "py-4 px-6",
};

const defaultStyles = "rounded-md font-light flex items-center";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
      {props.text}
      {props.endIcon}
    </button>
  );
};
