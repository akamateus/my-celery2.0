import React from "react";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-md
    font-semibold
    hover:opacity-80
    transition
    border-2

    ${fullWidth ? "w-full" : "w-fit"}
    ${secondary ? "bg-green-50" : "bg-green-500"}
    ${secondary ? "text-black" : "text-white"}
    ${secondary ? "border-stone-800" : "border-green-500"}
    ${large ? "text-xl" : "text-md"}
    ${large ? "px-5" : "px-4"}
    ${large ? "py-3" : "py-2"}
    ${outline ? "bg-green-500" : ""}
    ${outline ? "text-white" : ""}
    
    `}
        // ${outline ? "border-white" : ""}
        // ${secondary ? "border-black" : "border-green-500"}
      >
        {label}
      </button>
    </div>
  );
};
export default Button;
