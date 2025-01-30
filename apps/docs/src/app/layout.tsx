// import { Card, Test } from "@thirdbracket/bracketui";

// import { Navbar } from "@thirdbracket/core";

import { Navbar, Navbrand, ThemeScript } from "@thirdbracket/bracketui";

import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";

// import { Navbar } from "@thirdbracket/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} antialiased dark:bg-gray-950 dark:text-white`}
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <Navbar>
          <Navbrand>
            {" "}
            <Image
              src="/path.svg"
              alt=""
              width={120}
              height={27}
              className="w-full mr-1 h-5 sm:h-6 dark:invert"
            ></Image>
            <span>UI</span>
          </Navbrand>
        </Navbar>

        <main>{children}</main>
      </body>
    </html>
  );
}
