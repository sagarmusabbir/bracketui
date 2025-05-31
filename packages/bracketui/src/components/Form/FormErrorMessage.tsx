// packages/bracketui/src/components/Form/FormErrorMessage.tsx

"use client";
import { FC, HTMLAttributes } from "react";

export interface FormErrorMessageProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

const FormErrorMessage: FC<FormErrorMessageProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <p
      className={`
        mt-1
        text-xs
        text-red-500 dark:text-red-400
        ${className}
      `}
      {...props}
    >
      {children}
    </p>
  );
};

export default FormErrorMessage;
