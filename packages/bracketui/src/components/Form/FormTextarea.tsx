// packages/bracketui/src/components/Form/FormTextarea.tsx

"use client";
import { FC, TextareaHTMLAttributes } from "react";

export interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  isInvalid?: boolean;
}

const FormTextarea: FC<FormTextareaProps> = ({
  className = "",
  isInvalid,
  ...props
}) => {
  return (
    <textarea
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
        resize-y
        min-h-[80px]
        ${isInvalid ? "border-red-500 focus:ring-red-500" : ""}
        ${className}
      `}
      {...props}
    />
  );
};

export default FormTextarea;
