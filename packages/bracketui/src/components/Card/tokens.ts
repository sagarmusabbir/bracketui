// src/components/Card/tokens.ts

export const cardVariants = {
  default: "bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800",
  elevated: "bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-800",
  flat: "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
  glass: "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50",
  outline: "bg-transparent border border-gray-300 dark:border-gray-600",
  ghost: "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 border border-transparent",
};

export const cardInteractions = {
  clickable: "cursor-pointer hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md",
  static: "",
};

export const cardContent = {
  title: "font-semibold text-gray-900 dark:text-gray-50",
  description: "text-gray-600 dark:text-gray-400",
  category: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide",
};