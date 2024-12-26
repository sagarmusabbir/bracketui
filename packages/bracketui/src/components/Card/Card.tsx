export interface CardProps {
  children: React.ReactNode;
  // className?: string;
}

export function Card(props: CardProps) {
  return (
    <div className="rounded-lg bg-gray-100 border border-gray-200 p-4 text-white shadow-sm">
      {props.children}
    </div>
  );
}

Card.displayName = "Card";
