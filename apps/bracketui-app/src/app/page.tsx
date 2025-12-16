// import { Button, ThemeToggle } from "@thirdbracket/bracketui";
import { Button, ThemeToggle } from "@thirdbracket/bracketui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center  justify-items-center   min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white dark:bg-black text-black dark:text-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center ">
        {/* Theme Toggle for testing */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>

        <Image
          className="dark:invert h-26 w-auto"
          src="/logo.svg"
          alt="Bracket-UI logo"
          width={375}
          height={103}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 ]">
          <li className="mb-2 tracking-[-.01em]">
            Import components directly from{" "}
            <code className="bg-gray-100 text-sm dark:bg-gray-900 px-2 py-1 rounded  font-semibold">
              &quot;@thirdbracket/bracketui&quot;
            </code>
          </li>
          <li className="tracking-[-.01em] mb-2">
            Save and see your changes instantly.
          </li>
          <li className="tracking-[-.01em]">
            These buttons use BracketUI Button components.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-row">
          <Button>Get Started</Button>
          <Button variant="outline" href="./">
            Documentation
          </Button>
          {/* <Button
            href="/"
            size="md"
            theme={{
              hoverBackground: "[@media(hover:hover)]:hover:opacity-90",
              text: "text-white dark:text-black",
            }}
          >
            Get Started
          </Button>

          <Button outline href="./">
            Documentation
          </Button> */}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.npmjs.com/package/@thirdbracket/bracketui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/npm.svg"
            alt="npm icon"
            width={16}
            height={16}
          />
          npm Package
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/sagarmusabbir/bracketui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub Repo
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.thirdbracket.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/tbicon.svg"
            alt="Third Bracket icon"
            width={16}
            height={16}
          />
          Digital Solutions & Beyond →
        </a>
      </footer>
    </div>
  );
}
