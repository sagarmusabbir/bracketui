// "use client";
// import { createContext, useContext, useState } from "react";
// import clsx from "clsx";

// type TabContextType = {
//   activeTab: string;
//   setActiveTab: (value: string) => void;
// };

// export const TabContext = createContext<TabContextType | undefined>(undefined);

// export type TabProps = {
//   defaultValue?: string;
//   onChange?: (value: string) => void;
//   variant?: "default" | "pills";
//   className?: string;
//   children: React.ReactNode;
// };

// const Tab = ({
//   defaultValue,
//   onChange,
//   variant = "default",
//   className,
//   children,
// }: TabProps) => {
//   const [activeTab, setActiveTab] = useState(defaultValue || "");

//   const handleTabChange = (value: string) => {
//     setActiveTab(value);
//     onChange?.(value);
//   };

//   return (
//     <TabContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
//       <div className={clsx("w-full", className)}>{children}</div>
//     </TabContext.Provider>
//   );
// };

// export default Tab;

// packages/bracketui/src/components/Tab/Tab.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import clsx from "clsx";

interface TabContextType {
  value: string;
  onChange: (value: string) => void;
  mounted: boolean;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export interface TabProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

const Tab: React.FC<TabProps> = ({ defaultValue, children, className }) => {
  const [value, setValue] = useState(defaultValue);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <TabContext.Provider value={{ value, onChange: setValue, mounted }}>
      <div className={clsx("w-full", className)}>{children}</div>
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error(
      "Tab compound components must be used within Tab component"
    );
  }
  return context;
};

export default Tab;
