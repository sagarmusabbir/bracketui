// import { Card, Test } from "@thirdbracket/bracketui";

// import { Navbar } from "@thirdbracket/core";

import Header from "./Navbar";

import "./globals.css";
import { GeistSans } from "geist/font/sans";

// import { Navbar } from "@thirdbracket/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} antialiased`}>
      <body>
        {/* <NavBar /> */}

        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
