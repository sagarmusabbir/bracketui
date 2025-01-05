// import { Card, Test } from "@thirdbracket/bracketui";

import { GeistSans } from "geist/font/sans";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
