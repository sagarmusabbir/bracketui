// import clsx from "clsx";
// import { ComponentPropsWithRef, ElementType, FC, forwardRef } from "react";

// export type CardProps<T extends ElementType> = {
//   as?: T;
//   href?: string;
//   className?: string;
//   children?: React.ReactNode;
//   onClick?: () => void;
//   cover?: string | React.ReactElement;
//   header?: string;
// } & ComponentPropsWithRef<T>;

// const Card = forwardRef(function Card<T extends ElementType = "div">(
//   {
//     as,
//     href,
//     className = "",
//     children,
//     cover,

//     header,
//     onClick,
//     ...props
//   }: CardProps<T>,
//   ref: React.Ref<any>
// ) {
//   const Component = as || (href ? "a" : "div");
//   return (
//     <Component
//       ref={ref}
//       onClick={onClick}
//       {...(href ? { href } : {})}
//       {...props}
//       className={clsx(
//         "rounded-lg border border-gray-200 dark:border-gray-800 border-opacity-50 overflow-hidden flex flex-col justify-center items-stretch gap-y-3 transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out p-4 max-h-fit focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",
//         className
//       )}
//     >
//       {/* Cover Section */}
//       {cover &&
//         (typeof cover === "string" ? (
//           <div className="w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl opacity-80 p-0">
//             <img src={cover} alt="Card Image" />
//           </div>
//         ) : (
//           <div className="object-left md:object-cover w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl opacity-80">
//             {cover}
//           </div>
//         ))}

//       {/* Content Section */}
//       <div className="space-y-1">
//         {header && (
//           <h2 className="text-xl text-left font-semibold text-gray-950 dark:text-gray-50">
//             {header}
//           </h2>
//         )}
//         {/* Remove the p tag wrapper and let the children render directly */}
//         <div className="text-gray-600 dark:text-gray-500 text-sm text-left">
//           {children}
//         </div>
//       </div>
//     </Component>
//   );
// });

// export default Card;

// components/Card/Card.tsx

// import clsx from "clsx";
// import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

// const ExternalLinkIcon = () => (
//   <svg
//     className="inline-block w-4 h-4 ml-1"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//     />
//   </svg>
// );

// export type CardProps<T extends ElementType> = {
//   as?: T;
//   href?: string;
//   className?: string;
//   children?: React.ReactNode;
//   onClick?: () => void;
//   cover?: string | React.ReactElement;
//   isExternal?: boolean;
// } & ComponentPropsWithRef<T>;

// const Card = forwardRef(function Card<T extends ElementType = "div">(
//   {
//     as,
//     href,
//     className = "",
//     children,
//     cover,
//     onClick,
//     isExternal,
//     ...props
//   }: CardProps<T>,
//   ref: React.Ref<any>
// ) {
//   const Component = as || (href ? "a" : "div");

//   if (isExternal && !href) {
//     throw new Error("isExternal prop can only be used with href");
//   }

//   const externalProps =
//     href && isExternal
//       ? {
//           target: "_blank",
//           rel: "noopener noreferrer",
//         }
//       : {};

//   return (
//     <Component
//       ref={ref}
//       onClick={onClick}
//       {...(href ? { href } : {})}
//       {...externalProps}
//       {...props}
//       className={clsx(
//         "rounded-lg border border-gray-200 dark:border-gray-800 border-opacity-50 overflow-hidden flex flex-col justify-center items-stretch gap-y-3 transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out p-4 max-h-fit focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",
//         className
//       )}
//     >
//       {/* Cover Section */}
//       {cover &&
//         (typeof cover === "string" ? (
//           <div className="w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl opacity-80 p-0">
//             <img src={cover} alt="Card Image" />
//           </div>
//         ) : (
//           <div className="object-left md:object-cover w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl opacity-80">
//             {cover}
//           </div>
//         ))}

//       {/* Content Section */}
//       <div className="space-y-1">{children}</div>
//     </Component>
//   );
// });

// export default { Card, ExternalLinkIcon };

// import clsx from "clsx";
// import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

// // Internal ExternalLinkIcon component - not exported
// const ExternalLinkIcon = () => (
//   <svg
//     className="inline-block w-4 h-4 ml-1"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//     />
//   </svg>
// );

// export type CardProps<T extends ElementType> = {
//   as?: T;
//   href?: string;
//   className?: string;
//   children?: React.ReactNode;
//   onClick?: () => void;
//   cover?: string | React.ReactElement;
//   isExternal?: boolean;
// } & ComponentPropsWithRef<T>;

// const Card = forwardRef(function Card<T extends ElementType = "div">(
//   {
//     as,
//     href,
//     className = "",
//     children,
//     cover,
//     onClick,
//     isExternal,
//     ...props
//   }: CardProps<T>,
//   ref: React.Ref<any>
// ) {
//   const Component = as || (href ? "a" : "div");

//   if (isExternal && !href) {
//     throw new Error("isExternal prop can only be used with href");
//   }

//   const externalProps =
//     href && isExternal
//       ? {
//           target: "_blank",
//           rel: "noopener noreferrer",
//         }
//       : {};

//   return (
//     <Component
//       ref={ref}
//       onClick={onClick}
//       {...(href ? { href } : {})}
//       {...externalProps}
//       {...props}
//       className={clsx(
//         "rounded-lg border border-gray-200 dark:border-gray-800 border-opacity-50 overflow-hidden flex flex-col justify-center items-stretch gap-y-3 transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out p-4 max-h-fit focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",
//         className
//       )}
//     >
//       {/* Cover Section */}
//       {cover &&
//         (typeof cover === "string" ? (
//           <div className="w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl opacity-80 p-0">
//             <img src={cover} alt="Card Image" />
//           </div>
//         ) : (
//           <div className="object-left md:object-cover w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl opacity-80">
//             {cover}
//           </div>
//         ))}

//       {/* Content Section with automatic external icon */}
//       <div className="space-y-1">
//         {children}
//         {href && isExternal && <ExternalLinkIcon />}
//       </div>
//     </Component>
//   );
// });

// export default Card;

import clsx from "clsx";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

const ExternalLinkIcon = () => (
  <svg
    className="absolute top-4 right-4 w-4 h-4 text-gray-500 dark:text-gray-400"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 13 10 L 13 12 L 18.5625 12 L 9.28125 21.28125 L 10.71875 22.71875 L 20 13.4375 L 20 19 L 22 19 L 22 10 Z" />
  </svg>
);

export type CardProps<T extends ElementType> = {
  as?: T;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  cover?: React.ReactElement;
  isExternal?: boolean;
} & ComponentPropsWithRef<T>;

const Card = forwardRef(function Card<T extends ElementType = "div">(
  {
    as,
    href,
    className = "",
    children,
    cover,
    onClick,
    isExternal,
    ...props
  }: CardProps<T>,
  ref: React.Ref<any>
) {
  const Component = as || (href ? "a" : "div");

  if (isExternal && !href) {
    throw new Error("isExternal prop can only be used with href");
  }

  const externalProps =
    href && isExternal
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

  return (
    <Component
      ref={ref}
      onClick={onClick}
      {...(href ? { href } : {})}
      {...externalProps}
      {...props}
      className={clsx(
        "rounded-lg border border-gray-200 dark:border-gray-800 border-opacity-50 overflow-hidden flex flex-col justify-center items-stretch transition-all  motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",
        className
      )}
    >
      {/* Cover Section */}
      {cover && (
        <div className="relative bg-gray-100/60 dark:bg-gray-900/50 rounded-t-lg overflow-hidden -mx-4 -mt-4 px-8 pt-8">
          <div className="opacity-75  dark:invert dark:hue-rotate-180 backdrop-grayscale-50 ">
            {cover}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 space-y-1 relative">
        {href && isExternal && <ExternalLinkIcon />}
        {children}
      </div>
    </Component>
  );
});

export default Card;
