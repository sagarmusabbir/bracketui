import clsx from "clsx";
import { FC } from "react";

export interface CardProps {
  header?: string;
  cover?: string | React.ReactElement;
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const Card: FC<CardProps> = ({
  header,
  cover,
  href = "#",
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={clsx(
        "rounded-lg border  border-gray-200 dark:border-gray-800 border-opacity-50 overflow-hidden  flex flex-col justify-center items-stretch gap-y-3 transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out p-4 max-h-fit focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100",

        className
      )}
    >
      {/* Cover Section */}
      {/* <div className="object-left md:object-cover bg-gray-50 dark:bg-gray-900 bg-opacity-20 w-full h-full"> */}
      {
        cover &&
          (typeof cover === "string" ? (
            <div className="   w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl  opacity-80  p-0">
              <img src={cover} alt="Card Image" />
            </div>
          ) : (
            <div className="object-left md:object-cover     w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl  opacity-80  ">
              {cover}
            </div>
          ))
        // </div>
      }
      {/* </div> */}

      {/* Content Section */}
      <div className=" space-y-1 ">
        {header && (
          <h2 className="text-xl text-left font-semibold text-gray-950 dark:text-gray-50 ">
            {header}
          </h2>
        )}
        <p className="text-gray-600 dark:text-gray-500 text-sm text-left">
          {children}
        </p>
      </div>
    </a>
  );
};

export default Card;
