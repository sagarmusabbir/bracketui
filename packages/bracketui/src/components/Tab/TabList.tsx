// // TabList Component

// "use client";

// import clsx from "clsx";
// import { useContext } from "react";
// import { TabContext } from "./Tab";

// export type TabListProps = {
//   className?: string;
//   children: React.ReactNode;
// };

// const TabList = ({ className, children }: TabListProps) => {
//   const { activeTab } = useContext(TabContext) || {};

//   return (
//     <div
//       role="tablist"
//       className={clsx(
//         "flex gap-2 border-b border-gray-200 dark:border-gray-800",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export default TabList;

// packages/bracketui/src/components/Tab/TabList.tsx
"use client";

import React from "react";
import clsx from "clsx";
import { useTabContext } from "./Tab";

export interface TabListProps {
  children: React.ReactNode;
  className?: string;
}

const TabList: React.FC<TabListProps> = ({ children, className }) => {
  const { mounted } = useTabContext();

  if (!mounted) {
    return (
      <div
        className={clsx(
          "flex gap-2 border-b border-gray-200 dark:border-gray-800",
          className
        )}
      >
        <div className="h-10 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg w-24" />
        <div className="h-10 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg w-24" />
        <div className="h-10 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg w-24" />
      </div>
    );
  }

  return (
    <div
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
