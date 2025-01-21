import { FC, MouseEventHandler } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  onClick?: () => MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, size = "lg", href, onClick }) => {
  const buttonClasses = `
    inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-gray-800 via-slate-700 to-gray-950   hover:opacity-90 transition-opacity ease-in-out duration-300 text-white font-medium  tracking-tight ${
      {
        sm: "px-3 h-8 text-xs",
        md: "px-4 h-10 text-sm",
        lg: "px-6 h-11 text-base",
        xl: "px-8 h-12 text-lg",
      }[size]
    }`;

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
