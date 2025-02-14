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
   inline-flex items-center justify-center rounded-lg font-medium group 
    transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out
     leading-none ${
       {
         sm: "px-4 h-9 text-xs",
         md: "px-5 h-11 text-sm",
         lg: "px-6 h-12 text-base",
         xl: "px-7 h-14 text-lg",
       }[size]
     }`;

  const varientClasses = {
    default:
      "bg-gray-950 dark:bg-slate-100 text-white dark:text-gray-950 hover:opacity-90",
    outline:
      "border border-gray-200 dark:border-gray-800 text-gray-950 dark:text-white bg-clip-padding backdrop-filter backdrop-blur-sm hover:opacity-85",
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
