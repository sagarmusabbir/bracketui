// packages/bracketui/src/components/Form/FormCheckbox.tsx

"use client";
import { FC, InputHTMLAttributes } from "react";

export interface FormCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
  isInvalid?: boolean;
  label?: string;
}

const FormCheckbox: FC<FormCheckboxProps> = ({
  className = "",
  isInvalid,
  label,
  id,
  ...props
}) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className={`
          w-4 
          h-4
          text-blue-600
          bg-white dark:bg-gray-800
          border-gray-300 dark:border-gray-700
          rounded
          focus:ring-2
          focus:ring-blue-500 dark:focus:ring-blue-400
          focus:ring-offset-2
          focus:ring-offset-white dark:focus:ring-offset-gray-900
          disabled:opacity-60
          disabled:cursor-not-allowed
          ${isInvalid ? "border-red-500 focus:ring-red-500" : ""}
          ${className}
        `}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="ml-2 text-sm text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormCheckbox;
