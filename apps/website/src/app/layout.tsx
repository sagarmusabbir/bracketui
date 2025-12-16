import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@thirdbracket/bracketui";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Bracketui App",
  description: "Bolierplace template for create-bracketui-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased scroll-smooth `}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>

      {/* <HeaderWithMegamenu /> */}
      {/* <MegaHeader /> */}
      <body
        className="bg-slate-50 dark:bg-gray-950 py-16 "
        // style={{
        //   backgroundImage: `
        //   radial-gradient(at 40% 20%, rgba(148, 163, 184, 0.15) 0px, transparent 50%),
        //   radial-gradient(at 80% 0%, rgba(156, 163, 175, 0.12) 0px, transparent 50%),
        //   radial-gradient(at 0% 50%, rgba(100, 116, 139, 0.1) 0px, transparent 50%),
        //   radial-gradient(at 80% 50%, rgba(107, 114, 128, 0.1) 0px, transparent 50%),
        //   radial-gradient(at 0% 100%, rgba(148, 163, 184, 0.15) 0px, transparent 50%),
        //   radial-gradient(at 80% 100%, rgba(156, 163, 175, 0.12) 0px, transparent 50%)
        // `,
        // }}

        style={{
          backgroundImage: `
          /* Lighter Slates: Reduced Opacity */
          radial-gradient(at 40% 20%, rgb(241 245 249 / 0.1) 0px, transparent 50%), /* slate-100 with 10% opacity (was 30%) */
          radial-gradient(at 80% 0%, rgb(248 250 252 / 0.08) 0px, transparent 50%), /* slate-50 with 8% opacity (was 25%) */
          
          /* Darker Grays: Slightly Higher Opacity (more balance) */
          radial-gradient(at 0% 50%, rgb(17 24 39 / 0.06) 0px, transparent 50%),   /* gray-900 with 6% opacity (was 5%) */
          radial-gradient(at 80% 50%, rgb(3 7 18 / 0.04) 0px, transparent 50%),    /* gray-950 with 4% opacity (was 3%) */
          
          /* Lighter Slates: Reduced Opacity */
          radial-gradient(at 0% 100%, rgb(241 245 249 / 0.1) 0px, transparent 50%), /* slate-100 with 10% opacity (was 30%) */
          radial-gradient(at 80% 100%, rgb(248 250 252 / 0.08) 0px, transparent 50%)  /* slate-50 with 8% opacity (was 25%) */
        `,
        }}
      >
        {children}
      </body>
    </html>
  );
}
