import { FC, ReactElement } from "react";

export interface NavbrandProps {
  children?: React.ReactNode;

  logo?: string | ReactElement;
}

const Navbrand: FC<NavbrandProps> = ({ logo, children }) => {
  return (
    <a
      href="/"
      className=" group hover:opacity-80 transition-opacity ease-in-out duration-500 flex items-center"
    >
      {logo &&
        (typeof logo === "string" ? (
          <img
            src={logo}
            alt="logo"
            className="mr-1 w-full h-5 sm:h-7 dark:invert"
          />
        ) : (
          logo
        ))}

      {children}
    </a>
  );
};

export default Navbrand;
