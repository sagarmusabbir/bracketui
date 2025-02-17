// components/Card/CardHeader.tsx
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-2 mb-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardHeader;
