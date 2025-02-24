// Container.tsx
"use client";
import { FC } from "react";
import clsx from "clsx";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  fluid?: boolean;
  centered?: boolean;
  padding?: "none" | "small" | "medium" | "large";
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  as: Component = "div",
  fluid = false,
  centered = true,
  padding = "medium",
}) => {
  const containerClasses = clsx(
    // Base styles
    "w-full",
    // Container max-width styles
    {
      "max-w-7xl": !fluid, // Max width for standard container
      "w-full": fluid, // Full width for fluid container
    },
    // Margin and centering
    {
      "mx-auto": centered,
    },
    // Padding variations
    {
      "px-6 lg:px-8": padding === "medium",
      "px-4 lg:px-6": padding === "small",
      "px-8 lg:px-12": padding === "large",
      "px-0": padding === "none",
    },
    className
  );

  return <Component className={containerClasses}>{children}</Component>;
};

export default Container;
