import { AnchorHTMLAttributes } from "react";

export type ButtonVariant =
  | "base"
  | "glow"
  | "framed"
  | "ghost"
  | "dim"
  | "link";
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "pill";

// Base button props shared between both types
interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;

  fullWidth?: boolean;
  className?: string;
}

// Props for interactive button (Client)
// export interface ButtonClientProps
//   extends ButtonHTMLAttributes<HTMLButtonElement>,
//     BaseButtonProps {
//   isLoading?: boolean;
// }

// Props for link button (Server)
export interface ButtonServerProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    BaseButtonProps {
  href: string;
}
