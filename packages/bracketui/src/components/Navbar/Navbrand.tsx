import { FC } from "react";

export interface NavbrandProps {
  children?: React.ReactNode;

  logo?: string;
}

const Navbrand: FC<NavbrandProps> = ({ logo, children }) => {
  return (
    <a
      href="/"
      className="flex shrink-0 group transition-opacity ease-in-out duration-300 items-center"
    >
      {logo && (
        <img
          src={logo}
          alt="logo"
          className="w-24 h-full opacity-80 group-hover:opacity-100"
        />
      )}

      <span className="text-lg font-bold">{children}</span>
    </a>
  );
};

export default Navbrand;
