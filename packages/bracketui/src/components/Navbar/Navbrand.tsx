import clsx from "clsx";
import { FC, ReactElement } from "react";

export interface NavbrandProps {
  children?: React.ReactNode;
  logo?: string | ReactElement;
  href?: string;
  className?: string;
}

const Navbrand: FC<NavbrandProps> = ({
  logo,
  children,
  href = "/",
  className = "",
}) => {
  if (!logo && !children) {
    throw new Error(
      "Navbrand requires at least one prop: 'logo' or 'children'."
    );
  }
  return (
    <a
      href={href}
      className={clsx(
        "flex items-center gap-2  hover:opacity-85 transition-opacity motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out",
        className
      )}
    >
      {logo &&
        (typeof logo === "string" ? (
          <img
            src={logo}
            alt="Brand Logo"
            className={clsx("h-4 md:h-5  w-auto object-contain")}
          />
        ) : (
          logo
        ))}

      {children &&
        (typeof children === "string" ? (
          <span
            className={clsx(
              "self-center whitespace-nowrap",
              "font-semibold text-gray-950 dark:text-white"
            )}
          >
            {children}
          </span>
        ) : (
          children
        ))}
    </a>
  );
};

export default Navbrand;
