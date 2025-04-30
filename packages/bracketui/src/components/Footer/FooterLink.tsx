import clsx from "clsx";
import { FC, AnchorHTMLAttributes, ElementType } from "react";

export interface FooterLinkProps<T extends ElementType = "a">
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: React.ReactNode;
  className?: string;
  as?: T;
  theme?: {
    text?: string;
    states?: string;
  };
}

const FooterLink: FC<FooterLinkProps> = ({
  href,
  children,
  className = "",
  as: Component = "a",
  theme = {
    text: "text-gray-800 dark:text-gray-200",
    states: "focus-within:opacity-100 active:opacity-100 md:hover:opacity-100 ",
  },
  ...props
}) => {
  const themeStyles = clsx(theme.text, theme.states);
  return (
    <Component
      href={href}
      className={clsx(
        "block mb-3 last:mb-0 text-sm opacity-75 transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out",
        themeStyles,
        className
      )}
      // className={`
      //   block
      //   mb-3 last:mb-0  // Add vertical spacing between links and remove margin from last item
      //   text-sm
      //   text-gray-600 dark:text-gray-500
      //   hover:text-gray-900 dark:hover:text-gray-100
      //   transition-colors ease-in-out duration-300
      //   ${className}
      // `}
      {...props}
    >
      {children}
    </Component>
  );
};

export default FooterLink;
