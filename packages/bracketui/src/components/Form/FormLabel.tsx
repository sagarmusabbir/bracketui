// packages/bracketui/src/components/Form/FormLabel.tsx

"use client";
import { FC, LabelHTMLAttributes } from "react";

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

const FormLabel: FC<FormLabelProps> = ({
  children,
  className = "",
  required,
  ...props
}) => {
  return (
    <label
      className={`
        block 
        mb-2 
        text-sm 
        font-medium 
        text-gray-700 dark:text-gray-300
        ${className}
      `}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default FormLabel;
