// packages/ui/src/card.tsx
// import { forwardRef, } from "react";
// import { CardProps } from "./types";

// export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
//   const { variant, header, content, className } = props;

//   if (variant === "basic") {
//     return (
//       <div ref={ref} className={`card-basic ${className || ""}`}>
//         <h3 className="card-header">{header}</h3>
//         <div className="card-content">{content}</div>
//       </div>
//     );
//   }

//   return (
//     <div ref={ref} className={`card-with-image ${className || ""}`}>
//       <div className="card-image-wrapper">
//         <img
//           src={props.image.src}
//           alt={props.image.alt}
//           className="card-image"
//         />
//       </div>
//       <div className="card-body">
//         <h3 className="card-header">{header}</h3>
//         <div className="card-content">{content}</div>
//       </div>
//     </div>
//   );
// });

// Card.displayName = "Card";

import { forwardRef } from "react";
import type { CardProps } from "./types";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => {
    if (props.variant === "basic") {
      return (
        <div ref={ref} className={`card-basic ${className}`}>
          <h3 className="card-header">{props.header}</h3>
          <div className="card-content">{props.content}</div>
        </div>
      );
    }

    return (
      <div ref={ref} className={`card-with-image ${className}`}>
        <div className="card-image-wrapper">
          <img
            src={props.image.src}
            alt={props.image.alt}
            className="card-image"
          />
        </div>
        <div className="card-body">
          <h3 className="card-header">{props.header}</h3>
          <div className="card-content">{props.content}</div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
