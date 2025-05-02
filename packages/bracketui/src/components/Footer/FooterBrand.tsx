// // packages/bracketui/src/components/Footer/FooterBrand.tsx
// import clsx from "clsx";
// import { FC, ReactElement } from "react";

// export interface FooterBrandProps {
//   logo?: string | ReactElement;
//   children?: React.ReactNode;
//   className?: string;
//   socialLinks?: {
//     icon: React.ReactNode;
//     href: string;
//   }[];
//   copyright?: string;
// }

// const FooterBrand: FC<FooterBrandProps> = ({
//   logo,
//   children,
//   className = "",
// }) => {
//   return (
//     <div className={clsx("space-y-4 mb-4", className)}>
//       <a
//         href="/"
//         className="hover:opacity-85 transition-opacity motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out"
//       >
//         {logo &&
//           (typeof logo === "string" ? (
//             <img
//               src={logo}
//               alt="Brand Logo"
//               className={clsx("h-4 w-auto dark:invert")}
//             />
//           ) : (
//             logo
//           ))}
//       </a>

//       <div className="max-w-xs">
//         {children &&
//           (typeof children === "string" ? (
//             <span className={clsx("text-sm text-gray-500 ")}>{children}</span>
//           ) : (
//             children
//           ))}
//       </div>
//     </div>
//   );
// };

// export default FooterBrand;

"use client";
import clsx from "clsx";
import { FC, ReactElement } from "react";

export interface FooterBrandProps {
  logo?: string | ReactElement;
  children?: React.ReactNode; // Slogan or tagline
  className?: string;
  href?: string;
  address?: string;
  email?: string;
  phone?: string;
}

const FooterBrand: FC<FooterBrandProps> = ({
  logo,
  children,
  className = "",
  href = "/",
  address,
  email,
  phone,
}) => {
  if (!logo && !children && !address && !email && !phone) {
    throw new Error(
      "FooterBrand requires at least one prop: 'logo', 'children', 'address', 'email', or 'phone'."
    );
  }

  return (
    <div className={clsx("space-y-3 mb-4", className)}>
      {logo && (
        <a
          href={href}
          className="inline-block hover:opacity-85 transition-opacity motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out"
        >
          {typeof logo === "string" ? (
            <img
              src={logo}
              alt="Brand Logo"
              className="h-4 md:h-5 w-auto object-contain dark:invert"
            />
          ) : (
            logo
          )}
        </a>
      )}

      {children &&
        (typeof children === "string" ? (
          <p className="text-sm text-gray-600  dark:text-gray-500 ">
            {children}
          </p>
        ) : (
          children
        ))}

      {(address || email || phone) && (
        <div className="text-sm  text-gray-900/60 dark:text-gray-200/40 space-y-1">
          {address && <p>{address}</p>}
          {email && (
            <p>
              <a
                href={`mailto:${email}`}
                className="hover:underline transition-opacity"
              >
                {email}
              </a>
            </p>
          )}
          {phone && (
            <p>
              <a
                href={`tel:${phone}`}
                className="hover:underline transition-opacity"
              >
                {phone}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FooterBrand;
