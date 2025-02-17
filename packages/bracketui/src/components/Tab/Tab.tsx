"use client";
import { createContext, useContext, useState } from "react";
import clsx from "clsx";

type TabContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

export const TabContext = createContext<TabContextType | undefined>(undefined);

export type TabProps = {
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: "default" | "pills";
  className?: string;
  children: React.ReactNode;
};

const Tab = ({
  defaultValue,
  onChange,
  variant = "default",
  className,
  children,
}: TabProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue || "");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={clsx("w-full", className)}>{children}</div>
    </TabContext.Provider>
  );
};

export default Tab;
