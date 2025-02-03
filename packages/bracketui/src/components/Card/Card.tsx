import { FC } from "react";

export interface CardProps {
  header: string;
  cover?: string | React.ReactElement;
  children: React.ReactNode;
  href: string;
}

const Card: FC<CardProps> = ({
  header = "My Awesome Card",
  cover,
  href = "#",
  children,
}) => {
  return (
    <a
      href={href}
      className="rounded-lg border hover:border-gray-400 dark:hover:border-gray-600 border-gray-200 dark:border-gray-800 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl  h-auto  bg-opacity-10 hover:bg-opacity-100 flex flex-col justify-center transition-all ease-in duration-200 p-4 max-h-fit"
    >
      {/* Cover Section */}
      <div className="mx-auto ">
        {
          cover &&
            // <div className="mx-auto size-40 bg-slate-50">
            (typeof cover === "string" ? (
              <img
                src={cover}
                alt="Card Image"
                className=" object-cover mx-auto"
              />
            ) : (
              <div>{cover}</div>
            ))
          // </div>
        }
      </div>

      {/* Content Section */}

      <h2 className="text-xl text-left font-semibold text-gray-950 dark:text-white mb-2">
        {header}
      </h2>
      <p className="text-gray-600 dark:text-gray-500 text-sm text-left">
        {children}
      </p>
    </a>
  );
};

export default Card;
