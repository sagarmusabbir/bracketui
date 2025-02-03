"use client";
import { ReactNode } from "react";

export interface BrandProps {
  children: ReactNode;
}

const Brand = ({ children }: BrandProps) => {
  return <div className="text-xl font-bold">{children}</div>;
};

export default Brand;
