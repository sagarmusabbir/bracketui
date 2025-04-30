"use client";
import { Card } from "@thirdbracket/bracketui";

const demoIcon = (
  <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full p-3">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
    </svg>
  </div>
);

const cards = [
  {
    name: "Basic Card",
    props: { header: "Basic Card", children: "This is a basic card." },
  },
  {
    name: "Image Card",
    props: {
      header: "Image Card",
      cover: "/800x600.svg",
      children: "With image cover.",
    },
  },
  {
    name: "Icon Card",
    props: {
      header: "Icon Card",
      cover: demoIcon,
      isIcon: true,
      children: "Icon-based card.",
    },
  },
  {
    name: "External Link Card",
    props: {
      header: "External Link Card",
      href: "https://example.com",
      isExternal: true,
      children: "Opens in new tab.",
    },
  },
  {
    name: "Skeleton Card",
    props: { isLoading: true, size: "lg" },
  },
  {
    name: "Themed Card",
    props: {
      header: "Themed Card",
      cover: "/800x600.svg",
      theme: {
        background: "bg-yellow-50 dark:bg-yellow-900",
        border: "border-yellow-300",
        hoverBorder: "hover:border-yellow-500",
        text: "text-yellow-800 dark:text-yellow-200",
      },
      children: "Themed with yellow.",
    },
  },
  {
    name: "Aspect Ratio Card",
    props: {
      header: "Aspect Ratio Card",
      cover: "/600x400.svg",
      children: "Maintains image shape.",
    },
  },
  {
    name: "Clickable Card",
    props: {
      header: "Clickable Card",
      onClick: () => alert("Card clicked"),
      children: "Click triggers event.",
    },
  },
  {
    name: "Link Card",
    props: {
      header: "Link Card",
      href: "/internal-page",
      children: "Internal navigation.",
    },
  },
  {
    name: "Truncated Card",
    props: {
      header: "Truncated Card",
      truncate: true,
      children:
        "This description is very long and should be truncated after two lines for a clean layout.",
    },
  },
];

export default function CardGrid() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 p-6 bg-gray-50 dark:bg-gray-900 [column-fill:_balance]">
      {cards.map(({ name, props }, index) => (
        <div
          key={index}
          className="mb-6 break-inside-avoid"
          data-card-name={name} // You can use this for debugging or testing
        >
          <Card {...props} />
        </div>
      ))}
    </div>
  );
}
