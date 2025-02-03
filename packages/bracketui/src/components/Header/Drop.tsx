"use client";
import { useState, ReactNode } from "react";

export interface DropProps {
  label: string;
  children: ReactNode;
}

const Drop = ({ label, children }: DropProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="p-2 border rounded">
        {label}
      </button>
      {isOpen && (
        <div className="lg:absolute left-0 mt-2 bg-white border p-2 shadow-md">
          {children}
        </div>
      )}
    </div>
  );
};

export default Drop;
