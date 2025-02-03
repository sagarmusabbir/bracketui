"use client";
import { ReactNode } from "react";

export interface ItemProps {
  href: string;
  children: ReactNode;
}

const Item = ({ href, children }: ItemProps) => {
  return (
    <a
      href={href}
      className="block px-4 py-2 hover:bg-gray-100 rounded lg:inline"
    >
      {children}
    </a>
  );
};

export default Item;
