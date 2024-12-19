// export interface CardImageProps {
//   src: string;
//   alt: string;
// }

// export interface CardBaseProps {
//   header: string;
//   content: string;
//   className?: string;
// }

// export interface BasicCardProps extends CardBaseProps {
//   variant: "basic";
// }

// export interface ImageCardProps extends CardBaseProps {
//   variant: "with-image";
//   image: CardImageProps;
// }

// export type CardProps = BasicCardProps | ImageCardProps;

// packages/ui/src/components/card/types.ts
interface CardImageProps {
  src: string;
  alt: string;
}

type BaseCardProps = {
  header: string;
  content: string;
  className?: string;
};

type BasicVariant = BaseCardProps & {
  variant: "basic";
};

type ImageVariant = BaseCardProps & {
  variant: "with-image";
  image: CardImageProps;
};

export type CardProps = BasicVariant | ImageVariant;
