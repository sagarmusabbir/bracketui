"use client";

import { useContext } from "react";
import { TabContext } from "./Tab";
import clsx from "clsx";

export type TabPanelProps = {
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
};

const TabPanel = ({ value, icon, disabled, children }: TabPanelProps) => {
  const context = useContext(TabContext);
  if (!context) throw new Error("TabPanel must be used within Tab");
  const { activeTab, setActiveTab } = context;

  return (
    <button
      role="tab"
      aria-selected={activeTab === value}
      aria-controls={`tabpanel-${value}`}
      disabled={disabled}
      onClick={() => setActiveTab(value)}
      className={clsx(
        "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200",
        "relative -mb-px",
        activeTab === value
          ? "text-gray-950 dark:text-white border-b-2 border-gray-950 dark:border-white"
          : "text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "cursor-pointer"
      )}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
};

export default TabPanel;
