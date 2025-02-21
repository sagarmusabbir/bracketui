// packages/bracketui/src/components/Form/Form.tsx

"use client";
import { FC, FormHTMLAttributes, ElementType } from "react";

export interface FormProps<T extends ElementType = "form">
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "as"> {
  children: React.ReactNode;
  className?: string;
  as?: T;
}

const Form: FC<FormProps> = ({
  children,
  className = "",
  as: Component = "form",
  ...props
}) => {
  return (
    <Component className={`w-full ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Form;
