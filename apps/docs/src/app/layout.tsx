// import { Card, Test } from "@thirdbracket/bracketui";

// import { Navbar } from "@thirdbracket/core";

import "./globals.css";

import { Roboto_Flex } from "next/font/google";

const myFont = Roboto_Flex({
  subsets: ["latin"],

  display: "swap",
  preload: true,
});

// import Header from "..npm run dev
// /../components/Header";
import { ThemeScript } from "@thirdbracket/bracketui";
import SiteFooter from "../../components/Footer";

import HeaderBal from "../../components/Nav";

// import { Navbar } from "@thirdbracket/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${myFont.className}    antialiased dark:bg-gray-950 dark:text-white`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body suppressHydrationWarning>
        {/* <MegaHeader /> */}

        <HeaderBal />

        <main className="min-h-screen pt-16 lg:pt-24 dark:bg-gray-950 dark:text-white">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
