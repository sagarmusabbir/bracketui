// packages/bracketui/src/components/Form/FormSelect.tsx

"use client";
import { FC, SelectHTMLAttributes } from "react";

export interface FormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  isInvalid?: boolean;
}

const FormSelect: FC<FormSelectProps> = ({
  children,
  className = "",
  isInvalid,
  ...props
}) => {
  return (
    <select
      className={`
        w-full
        px-3 
        py-2 
        text-sm
        border 
        rounded-md
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        border-gray-300 dark:border-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500 dark:focus:ring-blue-400
        focus:border-transparent
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${isInvalid ? "border-red-500 focus:ring-red-500" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </select>
  );
};

export default FormSelect;
