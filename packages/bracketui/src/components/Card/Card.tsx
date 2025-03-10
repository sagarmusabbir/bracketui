// // import clsx from "clsx";
// // import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

// // const ExternalLinkIcon = () => (
// //   <svg
// //     className="inline-block w-4 h-4 ml-1.5 -translate-y-px"
// //     fill="currentColor"
// //     viewBox="0 0 24 24"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z" />
// //   </svg>
// // );

// // export type CardProps<T extends ElementType> = {
// //   as?: T;
// //   href?: string;
// //   className?: string;
// //   children?: React.ReactNode;
// //   onClick?: () => void;
// //   cover?: string | React.ReactElement;
// //   header?: string;
// //   isExternal?: boolean;
// //   isIcon?: boolean;
// //   truncate?: boolean; // new prop
// // } & ComponentPropsWithRef<T>;

// // const Card = forwardRef(function Card<T extends ElementType = "div">(
// //   {
// //     as,
// //     href,
// //     className = "",
// //     children,
// //     cover,
// //     header,
// //     onClick,
// //     isExternal,
// //     isIcon = false,
// //     truncate = false, // default to false
// //     ...props
// //   }: CardProps<T>,
// //   ref: React.Ref<any>
// // ) {
// //   const Component = as || (href ? "a" : "div");

// //   if (isExternal && !href) {
// //     throw new Error("isExternal prop can only be used with href");
// //   }

// //   const externalProps =
// //     href && isExternal
// //       ? {
// //           target: "_blank",
// //           rel: "noopener noreferrer",
// //         }
// //       : {};

// //   const renderCover = () => {
// //     if (!cover) return null;

// //     const coverContent =
// //       typeof cover === "string" ? (
// //         <img
// //           src={cover}
// //           alt={header || "Card cover"}
// //           className="w-full h-full object-cover"
// //         />
// //       ) : (
// //         cover
// //       );

// //     return (
// //       <div
// //         className={clsx(
// //           isIcon
// //             ? "p-4 pb-0" // Icon styling
// //             : "w-full", // Image cover styling
// //           {
// //             "flex items-center justify-center": !isIcon,
// //             "flex items-start": isIcon,
// //           }
// //         )}
// //       >
// //         <div className="w-full h-full">{coverContent}</div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <Component
// //       ref={ref}
// //       onClick={onClick}
// //       {...(href ? { href } : {})}
// //       {...externalProps}
// //       {...props}
// //       className={clsx(
// //         "rounded-lg border border-gray-200 dark:border-gray-800 border-opacity-50",
// //         "overflow-hidden flex flex-col",
// //         "transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out",
// //         "focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",
// //         className
// //       )}
// //     >
// //       {renderCover()}
// //       {/* <div className="mt-auto p-4"> */}
// //       <div
// //         className={clsx(
// //           "p-4",
// //           isIcon && "mt-auto" // Only add mt-auto when isIcon is true
// //         )}
// //       >
// //         {header && (
// //           <h2
// //             className={clsx(
// //               "text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 max-w-prose",
// //               truncate && "line-clamp-1"
// //             )}
// //           >
// //             {header}
// //             {href && isExternal && <ExternalLinkIcon />}
// //           </h2>
// //         )}
// //         <div
// //           className={clsx(
// //             "text-gray-800/70 dark:text-gray-200/40 text-sm max-w-prose",
// //             truncate && "line-clamp-2"
// //           )}
// //         >
// //           {children}
// //         </div>
// //       </div>
// //     </Component>
// //   );
// // });

// // export default Card;

// import clsx from "clsx";
// import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

// const ExternalLinkIcon = () => (
//   <svg
//     className="inline-block w-4 h-4 ml-1.5 -translate-y-px"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z" />
//   </svg>
// );

// export type CardProps<T extends ElementType> = {
//   as?: T;
//   href?: string;
//   className?: string;
//   children?: React.ReactNode;
//   onClick?: () => void;
//   cover?: string | React.ReactElement;
//   header?: string;
//   isExternal?: boolean;
//   isIcon?: boolean;
//   truncate?: boolean;
//   size?: "sm" | "md" | "lg" | "xl";
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
//     isIcon = false,
//     truncate = false,
//     size = "md",
//     ...props
//   }: CardProps<T>,
//   ref: React.Ref<any>
// ) {
//   const Component = as || (href ? "a" : "div");

//   // Card wrapper padding
//   const cardPadding = clsx({
//     "p-3": size === "sm",
//     "p-4": size === "md",
//     "p-5": size === "lg",
//     "p-6": size === "xl",
//   });

//   // Header text sizes
//   const headerSize = clsx({
//     "text-base": size === "sm",
//     "text-lg": size === "md",
//     "text-xl": size === "lg",
//     "text-2xl": size === "xl",
//   });

//   // Content text sizes
//   const contentSize = clsx({
//     "text-xs": size === "sm",
//     "text-sm": size === "md",
//     "text-base": size === "lg",
//     "text-lg": size === "xl",
//   });

//   // Spacing between elements
//   const elementSpacing = clsx({
//     "space-y-2": size === "sm",
//     "space-y-3": size === "md",
//     "space-y-4": size === "lg",
//     "space-y-5": size === "xl",
//   });

//   // Header bottom margin
//   const headerSpacing = clsx({
//     "mb-1.5": size === "sm",
//     "mb-2": size === "md",
//     "mb-3": size === "lg",
//     "mb-4": size === "xl",
//   });

//   // Cover image spacing
//   const coverSpacing = clsx({
//     "-mx-3 -mt-3 mb-3": size === "sm",
//     "-mx-4 -mt-4 mb-4": size === "md",
//     "-mx-5 -mt-5 mb-5": size === "lg",
//     "-mx-6 -mt-6 mb-6": size === "xl",
//   });

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

//   const renderCover = () => {
//     if (!cover) return null;

//     const coverContent =
//       typeof cover === "string" ? (
//         <img
//           src={cover}
//           alt={header || "Card cover"}
//           className="w-full h-full object-cover"
//         />
//       ) : (
//         cover
//       );

//     return (
//       <div
//         className={clsx(
//           coverSpacing,
//           isIcon
//             ? "pb-0" // Icon styling
//             : "w-full", // Image cover styling
//           {
//             "flex items-center justify-center": !isIcon,
//             "flex items-start": isIcon,
//           }
//         )}
//       >
//         <div className="w-full h-full">{coverContent}</div>
//       </div>
//     );
//   };

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
//         cardPadding,
//         className
//       )}
//     >
//       {cover && renderCover()}
//       <div className={clsx(elementSpacing, isIcon && "mt-auto")}>
//         {header && (
//           <h2
//             className={clsx(
//               "font-bold text-gray-800 dark:text-gray-100 max-w-prose",
//               headerSize,
//               headerSpacing,
//               truncate && "line-clamp-1"
//             )}
//           >
//             {header}
//             {href && isExternal && <ExternalLinkIcon />}
//           </h2>
//         )}
//         <div
//           className={clsx(
//             "text-gray-800/70 dark:text-gray-200/40 max-w-prose",
//             contentSize,
//             truncate && "line-clamp-2"
//           )}
//         >
//           {children}
//         </div>
//       </div>
//     </Component>
//   );
// });

// export default Card;

// import clsx from "clsx";
// import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

// const ExternalLinkIcon = () => (
//   <svg
//     className="inline-block w-4 h-4 ml-1.5 -translate-y-px"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z" />
//   </svg>
// );

// export type CardProps<T extends ElementType> = {
//   as?: T;
//   href?: string;
//   className?: string;
//   children?: React.ReactNode;
//   onClick?: () => void;
//   cover?: string | React.ReactElement;
//   header?: string;
//   isExternal?: boolean;
//   isIcon?: boolean;
//   truncate?: boolean; // new prop
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
//     isIcon = false,
//     truncate = false, // default to false
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

//   const renderCover = () => {
//     if (!cover) return null;

//     const coverContent =
//       typeof cover === "string" ? (
//         <img
//           src={cover}
//           alt={header || "Card cover"}
//           className="w-full h-full object-cover"
//         />
//       ) : (
//         cover
//       );

//     return (
//       <div
//         className={clsx(
//           isIcon
//             ? "p-4 pb-0" // Icon styling
//             : "w-full", // Image cover styling
//           {
//             "flex items-center justify-center": !isIcon,
//             "flex items-start": isIcon,
//           }
//         )}
//       >
//         <div className="w-full h-full">{coverContent}</div>
//       </div>
//     );
//   };

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
//       {renderCover()}
//       {/* <div className="mt-auto p-4"> */}
//       <div
//         className={clsx(
//           "p-4",
//           isIcon && "mt-auto" // Only add mt-auto when isIcon is true
//         )}
//       >
//         {header && (
//           <h2
//             className={clsx(
//               "text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 max-w-prose",
//               truncate && "line-clamp-1"
//             )}
//           >
//             {header}
//             {href && isExternal && <ExternalLinkIcon />}
//           </h2>
//         )}
//         <div
//           className={clsx(
//             "text-gray-800/70 dark:text-gray-200/40 text-sm max-w-prose",
//             truncate && "line-clamp-2"
//           )}
//         >
//           {children}
//         </div>
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
  truncate?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
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
    truncate = false,
    size = "md",
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
      <div className={clsx("w-full", isIcon ? "p-4" : "w-full")}>
        {coverContent}
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
        "rounded-lg border border-gray-200 dark:border-gray-800",
        "overflow-hidden flex flex-col",
        "transition-all duration-300 ease-in-out",
        "focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",
        className
      )}
    >
      {cover && renderCover()}
      <div
        className={clsx(
          {
            "p-3": size === "sm",
            "p-4": size === "md",
            "p-5": size === "lg",
            "p-6": size === "xl",
          },
          "flex flex-col",
          isIcon && "mt-auto"
        )}
      >
        {header && (
          <h2
            className={clsx(
              "font-bold text-gray-800 dark:text-gray-100 mb-2",
              {
                "text-base": size === "sm",
                "text-lg": size === "md",
                "text-xl": size === "lg",
                "text-2xl": size === "xl",
              },
              truncate && "line-clamp-1"
            )}
          >
            {header}
            {href && isExternal && <ExternalLinkIcon />}
          </h2>
        )}
        <div
          className={clsx(
            "text-gray-800/70 dark:text-gray-200/40",
            "text-sm",
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
