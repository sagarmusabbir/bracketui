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
    <div className="rounded-lg  border overflow-hidden  p-4 shadow-sm bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10  border-gray-100">
      {image && (
        <img
          src={image}
          alt="Card Image"
          className="size-40 object-cover p-4 mx-auto"
        />
      )}
      <div className="space-y-1 text-left">
        <h2 className="text-xl font-bold  ">{header}</h2>
        <p className="text-gray-600">{children}</p>
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
