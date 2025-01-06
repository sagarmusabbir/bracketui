import { FC } from "react";
// type Image = {
//   image: string;
//   alt: string;
// };
export interface CardProps {
  header: string;

  image?: string;
  children: React.ReactNode;
  // className?: string;
}

const Card: FC<CardProps> = ({
  header = "My Awesome Card",

  image,
  children,
}) => {
  return (
    <div className="rounded-lg bg-gray-200 border overflow-hidden border-gray-200 p-4 shadow-md">
      {image && (
        <img
          src={image}
          alt="Card Image"
          className="w-full h-auto object-cover p-4"
        />
      )}
      <div className="px-2">
        <h2 className="text-xl font-bold mb-2 ">{header}</h2>
        <p className="text-gray-800">{children}</p>
      </div>
    </div>
  );
};

export default Card;

// export function Card(props: CardProps) {
//   return (
//     <div className="rounded-lg bg-gray-800 border border-gray-200 p-4 text-white shadow-sm">
//       {props.children}
//     </div>
//   );
// }

// Card.displayName = "Card";
