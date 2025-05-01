// import clsx from "clsx";
// import React, {
//   ComponentPropsWithRef,
//   ElementType,
//   forwardRef,
//   ReactNode,
// } from "react";

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

// export type CardProps<T extends ElementType = "div"> = {
//   as?: T;
//   href?: string;
//   className?: string;
//   children?: ReactNode;
//   onClick?: () => void;
//   cover?: string | React.ReactElement;
//   header?: string;
//   isExternal?: boolean;
//   isIcon?: boolean;
//   truncate?: boolean;
//   size?: "sm" | "md" | "lg" | "xl";
// } & Omit<ComponentPropsWithRef<T>, "as" | "ref">;

// const Card = forwardRef(
//   <T extends ElementType = "div">(
//     {
//       as,
//       href,
//       className = "",
//       children,
//       cover,
//       header,
//       onClick,
//       isExternal,
//       isIcon = false,
//       truncate = false,
//       size = "md",
//       ...props
//     }: CardProps<T>,
//     ref: React.Ref<Element>
//   ) => {
//     const Component = as || (href ? "a" : "div");

//     if (isExternal && !href) {
//       throw new Error("isExternal prop can only be used with href");
//     }

//     const externalProps =
//       href && isExternal
//         ? {
//             target: "_blank",
//             rel: "noopener noreferrer",
//           }
//         : {};

//     const renderCover = () => {
//       if (!cover) return null;

//       const coverContent =
//         typeof cover === "string" ? (
//           <img
//             src={cover}
//             alt={header || "Card cover"}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           cover
//         );

//       return (
//         <div className={clsx("w-full", isIcon ? "p-4" : "w-full")}>
//           {coverContent}
//         </div>
//       );
//     };

//     return (
//       <Component
//         ref={ref}
//         onClick={onClick}
//         {...(href ? { href } : {})}
//         {...externalProps}
//         {...props}
//         className={clsx(
//           "rounded-lg border border-gray-500 border-opacity-20",
//           "overflow-hidden flex flex-col",
//           "transition-all duration-300 ease-in-out",
//           "focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",
//           className
//         )}
//       >
//         {cover && renderCover()}
//         <div
//           className={clsx(
//             {
//               "p-3": size === "sm",
//               "p-4": size === "md",
//               "p-5": size === "lg",
//               "p-6": size === "xl",
//             },
//             "flex flex-col",
//             isIcon && "mt-auto"
//           )}
//         >
//           {header && (
//             <h3
//               className={clsx(
//                 "font-bold text-gray-950 dark:text-white mb-2",
//                 {
//                   "text-base": size === "sm",
//                   "text-lg": size === "md",
//                   "text-xl": size === "lg",
//                   "text-2xl": size === "xl",
//                 },
//                 truncate && "line-clamp-1"
//               )}
//             >
//               {header}
//               {href && isExternal && <ExternalLinkIcon />}
//             </h3>
//           )}
//           <div
//             className={clsx(
//               "text-gray-950/60 dark:text-gray-200/60",
//               "text-sm",
//               truncate && "line-clamp-2"
//             )}
//           >
//             {children}
//           </div>
//         </div>
//       </Component>
//     );
//   }
// );

// export default Card;

// import clsx from "clsx";
// import React, {
//   ComponentPropsWithRef,
//   ElementType,
//   forwardRef,
//   ReactNode,
// } from "react";

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

// export type Theme = {
//   background?: string;
//   border?: string;
//   hoverBorder?: string;
//   text?: string;
// };

// export type CardProps<T extends ElementType = "div"> = {
//   as?: T;
//   href?: string;
//   className?: string;
//   children?: ReactNode;
//   onClick?: () => void;
//   cover?: string | React.ReactElement;
//   header?: string;
//   isExternal?: boolean;
//   isIcon?: boolean;
//   truncate?: boolean;
//   size?: "sm" | "md" | "lg" | "xl";
//   isLoading?: boolean;
//   theme?: Theme;
// } & Omit<ComponentPropsWithRef<T>, "as" | "ref">;

// const Card = forwardRef(
//   <T extends ElementType = "div">(
//     {
//       as,
//       href,
//       className = "",
//       children,
//       cover,
//       header,
//       onClick,
//       isExternal,
//       isIcon = false,
//       truncate = false,
//       size = "md",
//       isLoading = false,
//       theme,
//       ...props
//     }: CardProps<T>,
//     ref: React.Ref<Element>
//   ) => {
//     const Component = as || (href ? "a" : "div");

//     if (isExternal && !href) {
//       throw new Error("isExternal prop can only be used with href");
//     }

//     const externalProps =
//       href && isExternal
//         ? {
//             target: "_blank",
//             rel: "noopener noreferrer",
//           }
//         : {};

//     const renderCover = () => {
//       if (!cover) return null;

//       return (
//         <div
//           className={clsx(
//             "w-full",
//             isIcon
//               ? "min-h-[180px] flex items-center justify-center p-4"
//               : "aspect-[16/9] overflow-hidden"
//           )}
//         >
//           {typeof cover === "string" ? (
//             <img
//               src={cover}
//               alt={header || "Card cover"}
//               className={clsx(
//                 "w-full h-full object-cover",
//                 isIcon && "h-12 w-12"
//               )}
//             />
//           ) : (
//             cover
//           )}
//         </div>
//       );
//     };

//     const themeClasses = {
//       background: theme?.background || "bg-white dark:bg-gray-950",
//       border: theme?.border || "border-gray-500 border-opacity-20",
//       hoverBorder: theme?.hoverBorder || "hover:border-opacity-100",
//       text: theme?.text || "text-gray-950 dark:text-white",
//     };

//     return (
//       <Component
//         ref={ref}
//         onClick={onClick}
//         {...(href ? { href } : {})}
//         {...externalProps}
//         {...props}
//         className={clsx(
//           "rounded-lg border overflow-hidden flex flex-col transition-all duration-300 ease-in-out",
//           "focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",
//           themeClasses.background,
//           themeClasses.border,
//           themeClasses.hoverBorder,
//           isIcon && "h-full justify-between",
//           className
//         )}
//       >
//         {isLoading ? (
//           <>
//             <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-gray-700 animate-pulse" />
//             <div className="p-4 space-y-2">
//               <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
//               <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
//               <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
//             </div>
//           </>
//         ) : (
//           <>
//             {renderCover()}
//             <div
//               className={clsx(
//                 {
//                   "p-3": size === "sm",
//                   "p-4": size === "md",
//                   "p-5": size === "lg",
//                   "p-6": size === "xl",
//                 },
//                 "flex flex-col",
//                 isIcon && "mt-auto"
//               )}
//             >
//               {header && (
//                 <h3
//                   className={clsx(
//                     "font-bold mb-2",
//                     themeClasses.text,
//                     {
//                       "text-base": size === "sm",
//                       "text-lg": size === "md",
//                       "text-xl": size === "lg",
//                       "text-2xl": size === "xl",
//                     },
//                     truncate && "line-clamp-1"
//                   )}
//                 >
//                   {header}
//                   {href && isExternal && <ExternalLinkIcon />}
//                 </h3>
//               )}
//               <div
//                 className={clsx(
//                   "text-sm text-gray-950/60 dark:text-gray-200/60",
//                   truncate && "line-clamp-2"
//                 )}
//               >
//                 {children}
//               </div>
//             </div>
//           </>
//         )}
//       </Component>
//     );
//   }
// );

// export default Card;

import clsx from "clsx";
import React, {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  ReactNode,
} from "react";

const ExternalLinkIcon = () => (
  <svg
    className="inline-block w-4 h-4 ml-1.5 -translate-y-px"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M8 7C8 6.44772 8.44772 6 9 6H17C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.414L7.707 17.707a1 1 0 0 1-1.414-1.414L14.586 8H9C8.44772 8 8 7.55228 8 7Z" />
  </svg>
);

export type Theme = {
  background?: string;
  border?: string;
  hover?: string;
  text?: string;
};

export type CardProps<T extends ElementType = "div"> = {
  as?: T;
  href?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  cover?: string | React.ReactElement;
  header?: string;
  isExternal?: boolean;
  isIcon?: boolean;
  truncate?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: Theme;
} & Omit<ComponentPropsWithRef<T>, "as" | "ref">;

const Card = forwardRef(
  <T extends ElementType = "div">(
    {
      as,
      href,
      className,
      children,
      cover,
      header,
      onClick,
      isExternal,
      isIcon,
      truncate,
      size = "md",
      theme,
      ...props
    }: CardProps<T>,
    ref: React.Ref<Element>
  ) => {
    const Component = as || (href ? "a" : "div");

    if (isExternal && !href) {
      throw new Error("isExternal prop requires href");
    }

    const externalProps =
      href && isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

    const paddingMap = {
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
      xl: "p-6",
    };

    const headerSizeMap = {
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
      xl: "text-2xl",
    };

    const coverPaddingMap = {
      sm: "px-3 pt-3",
      md: "px-4 pt-4",
      lg: "px-5 pt-5",
      xl: "px-6 pt-6",
    };

    const renderCover = () => {
      if (!cover) return null;

      return (
        <div className={clsx("w-full", coverPaddingMap[size], isIcon && "p-4")}>
          {typeof cover === "string" ? (
            <img
              src={cover}
              alt={header || "Card cover"}
              className="w-full h-full object-cover"
            />
          ) : (
            cover
          )}
        </div>
      );
    };

    const themeClasses = {
      background: theme?.background || "",
      border: theme?.border || "border border-opacity-30 border-gray-500",
      hover:
        theme?.hover ||
        "[@media(hover:hover)]:hover:border-opacity-70  focus-within:border-opacity-70 active:border-opacity-100",
      text: theme?.text || "text-gray-500",
    };

    return (
      <Component
        ref={ref}
        onClick={onClick}
        {...(href ? { href } : {})}
        {...externalProps}
        {...props}
        className={clsx(
          "rounded-lg",
          themeClasses.background,
          themeClasses.border,
          themeClasses.hover,
          "overflow-hidden flex flex-col",
          "transition-all duration-300 ease-in-out",
          className
        )}
      >
        {renderCover()}
        <div
          className={clsx(
            paddingMap[size],
            "flex flex-col",
            isIcon && "mt-auto"
          )}
        >
          {header && (
            <h3
              className={clsx(
                "font-bold text-gray-900 dark:text-gray-50 mb-2",
                headerSizeMap[size],
                truncate && "line-clamp-1"
              )}
            >
              {header}
              {href && isExternal && <ExternalLinkIcon />}
            </h3>
          )}
          <div
            className={clsx(
              "text-sm max-w-xs",
              themeClasses.text,
              truncate && "line-clamp-2"
            )}
          >
            {children}
          </div>
        </div>
      </Component>
    );
  }
);

export default Card;
