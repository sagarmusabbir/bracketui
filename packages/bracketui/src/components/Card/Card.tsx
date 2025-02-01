// import { FC } from "react";
// // type Image = {
// //   image: string;
// //   alt: string;
// // };
// export interface CardProps {
//   header: string;

//   cover?: string;
//   children: React.ReactNode;
//   // className?: string;
// }

// const Card: FC<CardProps> = ({
//   header = "My Awesome Card",

//   cover,
//   children,
// }) => {
//   return (
//     <div className="rounded-lg  border border-gray-200 dark:border-gray-800 overflow-hidden  p-6     bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10  ">

//       {cover && (
//         <img
//           src={cover}
//           alt="Card Image"
//           className="size-40 object-cover p-4 mx-auto"
//         />
//       )}
//       <div className="space-y-4 text-left">
//         <h2 className="text-2xl font-medium  text-gray-950 dark:text-white">
//           {header}
//         </h2>
//         <p className="text-gray-600 dark:text-gray-500 text-sm">{children}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

import { FC } from "react";

export interface CardProps {
  header: string;
  cover?: string | React.ReactElement;
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({
  header = "My Awesome Card",
  cover,
  children,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10">
      <div className="p-6">
        {/* Cover Section */}
        {cover && (
          <div className="mb-6">
            {typeof cover === "string" ? (
              <img
                src={cover}
                alt="Card Image"
                className="size-40 object-cover mx-auto"
              />
            ) : (
              <div className="flex justify-center items-center">
                {/* Assuming the icon will be passed with its own size classes */}
                {cover}
              </div>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-medium text-gray-950 dark:text-white">
            {header}
          </h2>
          <p className="text-gray-600 dark:text-gray-500 text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
