import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";
import {
  cardStyles,
  cardContentStyles,
  cardTitleStyles,
  cardDescriptionStyles,
  cardImageStyles,
} from "./styles";
import { cardContent } from "./tokens";

export interface CardProps {
  className?: string;
  variant?: "default" | "elevated" | "flat" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  href?: string;
  external?: boolean;
  clickable?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      title,
      description,
      image,
      imageAlt,
      category,
      href,
      external = false,
      clickable = false,
      children,
      onClick,
    },
    ref
  ) => {
    const isClickable = clickable || !!href || !!onClick;
    const Component = href ? "a" : "div";
    
    const linkProps = href
      ? {
          href,
          ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
        }
      : {};

    return (
      <Component
        ref={ref as any}
        className={cn(
          cardStyles({ variant, clickable: isClickable }),
          className
        )}
        onClick={onClick as any}
        {...linkProps}
      >
        {image && (
          <div className="w-full overflow-hidden">
            <img
              src={image}
              alt={imageAlt || title || "Card image"}
              className={cardImageStyles({ size })}
            />
          </div>
        )}
        
        <div className={cardContentStyles({ size })}>
          {category && (
            <div className={cardContent.category}>
              {category}
            </div>
          )}
          
          {title && (
            <h3 className={cardTitleStyles({ size })}>
              {title}
            </h3>
          )}
          
          {description && (
            <p className={cardDescriptionStyles({ size })}>
              {description}
            </p>
          )}
          
          {children}
        </div>
      </Component>
    );
  }
);

Card.displayName = "Card";

export default Card;
