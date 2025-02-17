// TabList Component

"use client";

import clsx from "clsx";
import { useContext } from "react";
import { TabContext } from "./Tab";

export type TabListProps = {
  className?: string;
  children: React.ReactNode;
};

const TabList = ({ className, children }: TabListProps) => {
  const { activeTab } = useContext(TabContext) || {};

  return (
    <div
      role="tablist"
      className={clsx(
        "flex gap-2 border-b border-gray-200 dark:border-gray-800",
        className
      )}
    >
      {children}
    </div>
  );
};

export default TabList;
