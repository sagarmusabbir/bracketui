// "use client";

// import { FC } from "react";
// import { useTheme } from "../../hooks/useTheme";
// import type { Theme } from "../../hooks/useTheme";

// export interface ThemeToggleProps {
//   onThemeChange?: (theme: Theme) => void;
// }

// const ThemeToggle: FC<ThemeToggleProps> = ({ onThemeChange }) => {
//   const [theme, setTheme] = useTheme();

//   const handleThemeChange = (newTheme: Theme) => {
//     setTheme(newTheme);
//     onThemeChange?.(newTheme);
//   };

//   return (
//     <div className="relative inline-flex rounded-full bg-gray-200 dark:bg-gray-700 p-0.5 scale-90 sm:scale-100">
//       {/* Sliding Background */}
//       <div
//         className={`
//           absolute top-0.5 left-0.5 w-6 h-6 sm:w-7 sm:h-7
//           bg-white dark:bg-gray-800 rounded-full
//           transform transition-transform duration-200 ease-in-out
//           ${
//             theme === "light"
//               ? "translate-x-0"
//               : theme === "dark"
//                 ? "translate-x-[1.65rem] sm:translate-x-[1.85rem]"
//                 : "translate-x-[3.3rem] sm:translate-x-[3.7rem]"
//           }
//         `}
//       />

//       {/* Buttons */}
//       <button
//         onClick={() => handleThemeChange("light")}
//         className="relative z-10 p-1.5 sm:p-2"
//         aria-label="Use light theme"
//       >
//         <svg
//           className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           viewBox="0 0 24 24"
//         >
//           <circle cx="12" cy="12" r="4" />
//           <path d="M12 2v2" />
//           <path d="M12 20v2" />
//           <path d="M4.93 4.93l1.41 1.41" />
//           <path d="M17.66 17.66l1.41 1.41" />
//           <path d="M2 12h2" />
//           <path d="M20 12h2" />
//           <path d="M6.34 17.66l-1.41 1.41" />
//           <path d="M19.07 4.93l-1.41 1.41" />
//         </svg>
//       </button>

//       <button
//         onClick={() => handleThemeChange("dark")}
//         className="relative z-10 p-1.5 sm:p-2"
//         aria-label="Use dark theme"
//       >
//         <svg
//           className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
//         </svg>
//       </button>

//       <button
//         onClick={() => handleThemeChange("system")}
//         className="relative z-10 p-1.5 sm:p-2"
//         aria-label="Use system theme"
//       >
//         <svg
//           className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-600 dark:text-gray-400"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           viewBox="0 0 24 24"
//         >
//           <rect x="2" y="3" width="20" height="14" rx="2" />
//           <line x1="8" y1="21" x2="16" y2="21" />
//           <line x1="12" y1="17" x2="12" y2="21" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default ThemeToggle;

"use client";

import { FC } from "react";
import { useTheme } from "../../hooks/useTheme";
import type { Theme } from "../../hooks/useTheme";

export interface ThemeToggleProps {
  onThemeChange?: (theme: Theme) => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ onThemeChange }) => {
  const [theme, setTheme] = useTheme();
  const themes: Theme[] = ["light", "dark", "system"];

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    onThemeChange?.(newTheme);
  };

  return (
    <div className="relative inline-flex items-center justify-between rounded-full bg-gray-200 dark:bg-gray-800 ">
      {/* Sliding Background */}
      <div
        className="absolute inset-y-0 left-0  w-1/3 rounded-full border border-gray-200 dark:border-gray-800  bg-white  dark:bg-gray-800 transition-all duration-200 ease-in-out"
        style={{
          transform: `translateX(${themes.indexOf(theme) * 100}%)`,
        }}
      />

      {/* Theme Buttons */}
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => handleThemeChange(t)}
          className="relative z-10 flex items-center justify-center w-7 h-7 md:w-9 md:h-9 "
          aria-label={`Use ${t} theme`}
        >
          {t === "light" && (
            <svg
              className="h-4 w-4 md:h-5 md:w-5  text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M6.34 17.66l-1.41 1.41" />
              <path d="M19.07 4.93l-1.41 1.41" />
            </svg>
          )}
          {t === "dark" && (
            <svg
              className="h-4 w-4 md:h-5 md:w-5 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
          )}
          {t === "system" && (
            <svg
              className="h-4 w-4 md:h-5 md:w-5 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
