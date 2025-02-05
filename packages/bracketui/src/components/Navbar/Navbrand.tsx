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
          <img src={logo} alt="logo" className="w-auto mr-1 h-5 dark:invert" />
        ) : (
          logo
        ))}

      <span className="self-center whitespace-nowrap font-semibold text-gray-950 dark:text-white">
        {children}
      </span>
    </a>
  );
};

export default Navbrand;
