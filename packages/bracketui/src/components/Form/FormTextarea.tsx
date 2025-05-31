// packages/bracketui/src/components/Form/FormTextarea.tsx

"use client";
import React from "react";
import { TextareaHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  isInvalid?: boolean;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, isInvalid, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full px-3 py-2 text-sm border rounded-md bg-gray-50 dark:bg-gray-900 text-black dark:text-white placeholder:text-primary-400 placeholder:dark:text-primary-600 border-gray-300 dark:border-gray-700 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400 focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed resize-y min-h-[80px]",
          isInvalid
            ? "border-red-500 dark:border-red-400 focus-visible:ring-red-500 dark:focus-visible:ring-red-400 focus:ring-red-500 dark:focus:ring-red-400"
            : "",
          className
        )}
        aria-invalid={isInvalid ? "true" : "false"}
        aria-describedby={isInvalid ? "error-message" : undefined} // optional: connect to error message if needed
        required={props.required}
        disabled={props.disabled}
        {...props}
      />
    );
  }
);

export default FormTextarea;
