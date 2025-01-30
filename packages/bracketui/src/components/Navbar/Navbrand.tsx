import { FC, ReactElement } from "react";

export interface NavbrandProps {
  children?: React.ReactNode;

  logo?: string | ReactElement;
}

const Navbrand: FC<NavbrandProps> = ({ logo, children }) => {
  return (
    <a
      href="/"
      className=" group hover:opacity-80 transition-opacity ease-in-out duration-500 flex items-center "
    >
      {logo &&
        (typeof logo === "string" ? (
          <img
            src={logo}
            alt="logo"
            className="w-full mr-1 h-5 sm:h-6 dark:invert"
          />
        ) : (
          logo
        ))}

      {children}
    </a>
  );
};

export default Navbrand;
