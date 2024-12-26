export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
//   return (
//     <div
//       className={`rounded-lg bg-gray-900 border border-gray-200 p-4 text-white shadow-sm ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

export function Card(props: CardProps) {
  return (
    <div
      className={`rounded-lg bg-gray-900 border border-gray-200 p-4 text-white shadow-sm ${props.className}`}
    >
      {props.children}
    </div>
  );
}

Card.displayName = "Card";
