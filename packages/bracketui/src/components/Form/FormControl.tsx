// packages/bracketui/src/components/Form/FormControl.tsx

"use client";
import { FC, HTMLAttributes } from "react";

export interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
}

const FormControl: FC<FormControlProps> = ({
  children,
  className = "",
  isRequired,
  isInvalid,
  isDisabled,
  ...props
}) => {
  return (
    <div
      className={`
        mb-4 last:mb-0
        ${isDisabled ? "opacity-60" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default FormControl;
