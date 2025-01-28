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
      "bg-gray-950 dark:bg-slate-100 text-white dark:text-gray-950 hover:opacity-90",
    outline:
      "border-2 border-gray-950 dark:border-slate-100 text-gray-950 dark:text-white hover:bg-gray-950 dark:hover:bg-slate-100 hover:text-white dark:hover:text-gray-950",
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
