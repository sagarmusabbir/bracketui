// import { Card, Test } from "@thirdbracket/bracketui";

// import { Navbar } from "@thirdbracket/core";

import "./globals.css";

import { Manrope } from "next/font/google";

const plus = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
      className={`${plus.className}    antialiased dark:bg-gray-950 dark:text-white`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body suppressHydrationWarning>
        {/* <MegaHeader /> */}

        <HeaderBal />

        <main className="min-h-screen pt-16 md:pt-24 dark:bg-gray-950 dark:text-white">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
