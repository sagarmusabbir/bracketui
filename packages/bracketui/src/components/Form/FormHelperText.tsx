// packages/bracketui/src/components/Form/FormHelperText.tsx

"use client";
import { FC, HTMLAttributes } from "react";

export interface FormHelperTextProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

const FormHelperText: FC<FormHelperTextProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <p
      className={`
        mt-1
        text-xs
        text-gray-500 dark:text-gray-400
        ${className}
      `}
      {...props}
    >
      {children}
    </p>
  );
};

export default FormHelperText;
