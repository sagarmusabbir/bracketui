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
    className="inline-block w-4 h-4 ml-1.5 -translate-y-px"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z" />
  </svg>
);

// export type CardProps<T extends ElementType> = {
//   as?: T;
//   href?: string;
//   className?: string;
//   children?: React.ReactNode;
//   onClick?: () => void;
//   cover?: React.ReactElement;
//   header?: string;
//   isExternal?: boolean;
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
//         "rounded-lg border border-gray-200 dark:border-gray-800 border-opacity-50",
//         "overflow-hidden flex flex-col",
//         "transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out",
//         "focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",
//         className
//       )}
//     >
//       {cover && (
//         <div className="flex-1 flex items-center justify-center">{cover}</div>
//       )}
//       <div className="mt-auto p-4">
//         {header && (
//           <h2 className="text-xl font-bold text-gray-950 dark:text-gray-50 mb-2">
//             {header}
//             {href && isExternal && <ExternalLinkIcon />}
//           </h2>
//         )}
//         <div className="text-gray-600 dark:text-gray-500 text-sm">
//           {children}
//         </div>
//       </div>
//     </Component>
//   );
// });

export type CardProps<T extends ElementType> = {
  as?: T;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  cover?: string | React.ReactElement;
  header?: string;
  isExternal?: boolean;
  isIcon?: boolean;
  truncate?: boolean; // new prop
} & ComponentPropsWithRef<T>;

const Card = forwardRef(function Card<T extends ElementType = "div">(
  {
    as,
    href,
    className = "",
    children,
    cover,
    header,
    onClick,
    isExternal,
    isIcon = false,
    truncate = false, // default to false
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

  const renderCover = () => {
    if (!cover) return null;

    const coverContent =
      typeof cover === "string" ? (
        <img
          src={cover}
          alt={header || "Card cover"}
          className="w-full h-full object-cover"
        />
      ) : (
        cover
      );

    return (
      <div
        className={clsx(
          isIcon
            ? "p-4 pb-0" // Icon styling
            : "w-full", // Image cover styling
          {
            "flex items-center justify-center": !isIcon,
            "flex items-start": isIcon,
          }
        )}
      >
        <div className="w-full h-full">{coverContent}</div>
      </div>
    );
  };

  return (
    <Component
      ref={ref}
      onClick={onClick}
      {...(href ? { href } : {})}
      {...externalProps}
      {...props}
      className={clsx(
        "rounded-lg border border-gray-200 dark:border-gray-800 border-opacity-50",
        "overflow-hidden flex flex-col",
        "transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out",
        "focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",
        className
      )}
    >
      {renderCover()}
      {/* <div className="mt-auto p-4"> */}
      <div
        className={clsx(
          "p-4",
          isIcon && "mt-auto" // Only add mt-auto when isIcon is true
        )}
      >
        {header && (
          <h2
            className={clsx(
              "text-xl font-bold text-gray-950 dark:text-gray-50 mb-2 max-w-prose",
              truncate && "line-clamp-1"
            )}
          >
            {header}
            {href && isExternal && <ExternalLinkIcon />}
          </h2>
        )}
        <div
          className={clsx(
            "text-gray-800/70 dark:text-gray-200/40 text-sm max-w-prose",
            truncate && "line-clamp-2"
          )}
        >
          {children}
        </div>
      </div>
    </Component>
  );
});

export default Card;
