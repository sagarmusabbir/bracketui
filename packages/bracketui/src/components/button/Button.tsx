export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className="bg-gray-900 text-white px-2 py-2">
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
