// import { Card, Test } from "@thirdbracket/bracketui";

// import { Navbar } from "@thirdbracket/core";

import "./globals.css";
import { GeistSans } from "geist/font/sans";

// import Header from "../../components/Header";
import { ThemeScript } from "@thirdbracket/bracketui";
import SiteFooter from "../../components/Footer";
import Header from "../../components/Header";

// import { Navbar } from "@thirdbracket/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className}  antialiased dark:bg-gray-950 dark:text-white`}
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
