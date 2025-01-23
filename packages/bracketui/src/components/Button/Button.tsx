import { FC, MouseEventHandler } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  onClick?: () => MouseEventHandler<HTMLButtonElement>;
  variant?: "default" | "outline";
}

const Button: FC<ButtonProps> = ({
  children,
  size = "lg",
  href,
  onClick,
  variant = "default",
}) => {
  const baseClasses = `
   inline-flex items-center justify-center rounded-lg 
    transition-all ease-in-out duration-300 
    font-medium tracking-tight ${
      {
        sm: "px-3 h-8 text-xs",
        md: "px-4 h-10 text-sm",
        lg: "px-6 h-11 text-base",
        xl: "px-8 h-12 text-lg",
      }[size]
    }`;

  const varientClasses = {
    default:
      "bg-gradient-to-r from-gray-800 via-slate-700/90 to-gray-800 text-white hover:opacity-90",
    outline:
      "border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white",
  }[variant];

  const buttonClasses = `${baseClasses} ${varientClasses}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
