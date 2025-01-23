import { FC } from "react";

export interface NavLinkProps {
  href?: string;
  children?: React.ReactNode;
}

const Navlink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-700  hover:text-gray-950 md:px-3 py-2 transition-colors block md:flex text-base md:text-sm "
    >
      {children}
    </a>
  );
};

export default Navlink;
