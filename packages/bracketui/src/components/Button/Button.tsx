// export interface ButtonProps {
//   children: React.ReactNode;
// }

// export function Button(props: ButtonProps) {
//   return <button>{props.children}</button>;
// }

// Button.displayName = "Button";

import { FC } from "react";

type ButtonVariant = "default" | "pill" | "flat" | "outline" | "sharp";

type ButtonColor = "blue" | "green" | "red" | "orange" | "beige" | "gray";

type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "default",
  color = "beige",
  size = "md",
  children,

  ...props
}) => {
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    transition
    duration-200
    ease-in-out
  `;

  const sizeClasses = {
    sm: "h-8 px-3 text-xs ",
    md: "px-4 h-10 text-sm ",
    lg: "h-11 px-6 text-base",
    xl: "h-12 px-8 text-lg",
  }[size];

  const variantClasses = {
    default: "rounded-md bg-opacity-100",
    pill: "rounded-2xl",

    flat: "rounded-md bg-opacity-70 hover:bg-opacity-75",
    outline: "rounded-md border-2",
    sharp: "rounded-none",
  }[variant];

  const colorClasses = {
    blue: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-700",
    green: "bg-green-700 text-white hover:bg-green-800 focus:ring-green-700",
    red: "bg-red-700 text-white hover:bg-red-800 focus:ring-red-700",
    orange:
      "bg-orange-700 text-white hover:bg-orange-700 focus:ring-orange-800 border-orange-700",

    beige: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-700",
    gray: "bg-black text-white hover:bg-gray-900 focus:ring-black",
  }[color];

  // Modified colorClasses for outline variant
  const outlineColorClasses = {
    blue: "text-blue-700 hover:bg-blue-700 bg-transparent border-blue-700 hover:text-white",
    green:
      "text-green-700 hover:bg-green-700 bg-transparent border-green-700 hover:text-white",
    red: "text-red-700 hover:bg-red-700 hover:text-white bg-transparent border-red-700",
    orange:
      "text-orange-700 hover:bg-orange-700 hover:text-white border-orange-700 bg-transparent",

    beige:
      "text-gray-700 hover:bg-slate-700 hover:text-white border-slate-500 bg-transparent",
    gray: "text-gray-900 hover:bg-slate-900 hover:text-white border-slate-900 bg-transparent",
    // ... (Add other colors as needed)
  };

  return (
    <button
      type="button"
      className={`${baseClasses} ${sizeClasses} ${variantClasses} 
      ${variant === "outline" ? outlineColorClasses[color] : colorClasses}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
