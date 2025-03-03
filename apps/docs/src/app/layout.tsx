// import { Card, Test } from "@thirdbracket/bracketui";

// import { Navbar } from "@thirdbracket/core";

import "./globals.css";
import localFont from "next/font/local";

// import { Roboto_Flex } from "next/font/google";

// const myFont = Roboto({
//   subsets: ["latin"],

//   display: "swap",
//   preload: true,
// });

// const myFont = localFont({
//   src: "./Roboto-VariableFont.ttf",

//   display: "swap",
// });

const roboto = localFont({
  src: [
    {
      path: "./Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Roboto-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto-Medium.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Roboto-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

// import Header from "..npm run dev
// /../components/Header";
import { ThemeScript } from "@thirdbracket/bracketui";
import SiteFooter from "../../components/Footer/Footer";

import Header from "../../components/Header/Header";

// import { Navbar } from "@thirdbracket/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.className} antialiased dark:bg-gray-950 dark:text-white`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body suppressHydrationWarning>
        {/* <MegaHeader /> */}

        <Header />

        <main className="min-h-screen pt-16 lg:pt-24 dark:bg-gray-950 dark:text-white">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
