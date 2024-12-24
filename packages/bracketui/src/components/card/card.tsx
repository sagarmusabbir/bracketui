import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg bg-blue-500 border border-gray-200 p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};
