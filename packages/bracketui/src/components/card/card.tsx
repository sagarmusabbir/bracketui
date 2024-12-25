import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}
//the comment another comment
export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg bg-gray-900 border border-gray-200 p-4 text-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};
