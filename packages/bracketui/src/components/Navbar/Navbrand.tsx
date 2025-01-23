import { FC, ReactElement } from "react";

export interface NavbrandProps {
  children?: React.ReactNode;

  logo?: string | ReactElement;
}

const Navbrand: FC<NavbrandProps> = ({ logo, children }) => {
  return (
    <a
      href="/"
      className="flex shrink-0 group transition-opacity ease-in-out duration-300 items-center"
    >
      {logo &&
        (typeof logo === "string" ? (
          <img
            src={logo}
            alt="logo"
            className="w-full h-4 md:h-5 opacity-80 group-hover:opacity-100"
          />
        ) : (
          logo
        ))}

      <span className="text-base text-gray-900 font-bold bg-gradient-to-l from-slate-300 via-gray-300 ml-2 to-slate-300 px-1 rounded-lg">
        {children}
      </span>
    </a>
  );
};

export default Navbrand;
