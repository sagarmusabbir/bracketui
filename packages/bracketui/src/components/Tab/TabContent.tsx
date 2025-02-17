"use client";

import { useContext } from "react";
import { TabContext } from "./Tab";
import clsx from "clsx";

export type TabContentProps = {
  value: string;
  className?: string;
  children: React.ReactNode;
};

const TabContent = ({ value, className, children }: TabContentProps) => {
  const context = useContext(TabContext);
  if (!context) throw new Error("TabContent must be used within Tab");
  const { activeTab } = context;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      hidden={activeTab !== value}
      className={clsx(
        "focus:outline-none",
        activeTab === value ? "animate-fadeIn" : "",
        className
      )}
    >
      {children}
    </div>
  );
};

export default TabContent;
