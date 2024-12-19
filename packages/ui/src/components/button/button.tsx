// import { forwardRef } from "react";
// import { ButtonClientProps, ButtonServerProps, isServerProps } from "./types";
// import { ButtonClient } from "./button-client";
// import { ButtonServer } from "./button-server";

// export const Button = forwardRef<
//   HTMLButtonElement | HTMLAnchorElement,
//   ButtonClientProps | ButtonServerProps
// >((props, ref) => {
//   if (isServerProps(props)) {
//     return <ButtonServer {...props} ref={ref as any} />;
//   }
//   return <ButtonClient {...props} ref={ref as any} />;
// });

// Button.displayName = "Button";

import { forwardRef } from "react";
import { ButtonServerProps } from "./types";
import { ButtonServer } from "./button-server";

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonServerProps
>((props, ref) => {
  return <ButtonServer {...props} ref={ref as any} />;
});

Button.displayName = "Button";
