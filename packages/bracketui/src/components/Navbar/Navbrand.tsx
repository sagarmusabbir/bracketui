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
  return (
    <a
      href="/"
      className={clsx(
        "group hover:opacity-80 transition-opacity ease-in-out duration-500",
        "flex items-center gap-1",
        className
      )}
    >
      {logo &&
        (typeof logo === "string" ? (
          <img src={logo} alt="Brand Logo" className={clsx("h-5 w-auto")} />
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
