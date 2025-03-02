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

const myFont = localFont({
  src: "./Roboto-VariableFont.ttf",
  display: "swap",
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
      className={`${myFont.className} antialiased dark:bg-gray-950 dark:text-white`}
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
