// // packages/bracketui/src/components/Form/FormInput.tsx

// "use client";
// import { FC, InputHTMLAttributes } from "react";

// export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
//   className?: string;
//   isInvalid?: boolean;
// }

// const FormInput: FC<FormInputProps> = ({
//   className = "",
//   isInvalid,
//   ...props
// }) => {
//   return (
//     <input
//       className={`
//         w-full
//         px-3
//         py-2
//         text-sm
//         border
//         rounded-lg
//         bg-white dark:bg-gray-800
//         text-gray-900 dark:text-gray-100
//         border-gray-300 dark:border-gray-700
//         focus:outline-none
//         focus:ring-2
//         focus:ring-blue-500 dark:focus:ring-blue-400
//         focus:border-transparent
//         disabled:opacity-60
//         disabled:cursor-not-allowed
//         ${isInvalid ? "border-red-500 focus:ring-red-500" : ""}
//         ${className}
//       `}
//       {...props}
//     />
//   );
// };

// export default FormInput;

"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isInvalid?: boolean;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, isInvalid, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 file:border-0 file:bg-transparent file:text-sm file:font-medium rounded-md bg-gray-50 dark:bg-gray-900 text-black dark:text-white placeholder:text-primary-400 placeholder:dark:text-primary-600  focus:outline-none focus:ring-2 focus-visible:ring-2 focus:ring-slate-500 focus:border-transparent dark:focus:ring-slate-400 focus-visible:ring-slate-500 dark:focus-visible:ring-slate-400 disabled:opacity-50 disabled:cursor-not-allowed",
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

// FormInput.displayName = "FormInput";

export default FormInput;
