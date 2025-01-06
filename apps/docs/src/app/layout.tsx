// import { Card, Test } from "@thirdbracket/bracketui";

// import { Navbar } from "@thirdbracket/core";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

import { Navbar } from "@thirdbracket/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} antialiased `}>
      <body>
        <Navbar
          brand={{
            name: "UI",
            logo: "/logo.svg",
          }}
        ></Navbar>

        {/* <Nav /> */}

        {children}
      </body>
    </html>
  );
}
