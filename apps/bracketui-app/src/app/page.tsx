import { Button, ThemeToggle } from "@thirdbracket/bracketui";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center  justify-items-center   min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white dark:bg-black text-black dark:text-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center ">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Next.js logo"
          width={375}
          height={103}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 ]">
          <li className="mb-2 tracking-[-.01em]">
            Import components directly from{" "}
            <code className="bg-gray-100 text-sm dark:bg-gray-900 px-2 py-1 rounded  font-semibold">
              "@thirdbracket/bracketui"
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
          <Button
            href="/"
            size="md"
            theme={{
              hoverBackground: "[@media(hover:hover)]:hover:opacity-90",

              text: "text-white dark:text-black",
            }}
            // className="!font-medium !text-primary-50 dark:!text-primary-950"
          >
            Get Started
          </Button>

          <Button outline href="./">
            Documentation
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
