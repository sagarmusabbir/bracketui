// "use client";

// import { useContext } from "react";
// import { TabContext } from "./Tab";
// import clsx from "clsx";

// export type TabContentProps = {
//   value: string;
//   className?: string;
//   children: React.ReactNode;
// };

// const TabContent = ({ value, className, children }: TabContentProps) => {
//   const context = useContext(TabContext);
//   if (!context) throw new Error("TabContent must be used within Tab");
//   const { activeTab } = context;

//   return (
//     <div
//       role="tabpanel"
//       id={`tabpanel-${value}`}
//       aria-labelledby={`tab-${value}`}
//       hidden={activeTab !== value}
//       className={clsx(
//         "focus:outline-none",
//         activeTab === value ? "animate-fadeIn" : "",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export default TabContent;

// packages/bracketui/src/components/Tab/TabContent.tsx
"use client";

import React from "react";
import { useTabContext } from "./Tab";

export interface TabContentProps {
  children: React.ReactNode;
  value: string;
}

const TabContent: React.FC<TabContentProps> = ({ children, value }) => {
  const { value: selectedValue, mounted } = useTabContext();

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/2" />
      </div>
    );
  }

  if (value !== selectedValue) {
    return null;
  }

  return <>{children}</>;
};

export default TabContent;
