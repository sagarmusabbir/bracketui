// import { Button, Card, ThemeToggle } from "@thirdbracket/bracketui";
import { MdArrowRight } from "react-icons/md";
import { RiGhostLine } from "react-icons/ri";
import { Button, ThemeToggle } from "@thirdbracket/bracketui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-8 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <div className="flex justify-between items-center mb-6">
            <Image
              className="dark:invert h-12 w-auto mx-auto"
              src="/logo.svg"
              alt="Bracket-UI logo"
              width={950}
              height={181}
              priority
            />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Official BracketUI website
          </p>
        </header>

        <section className="mb-12 bg-slate-50 dark:bg-zinc-950 pb-8   rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between p-6 mb-6 rounded-t-lg bg-slate-300/20 dark:bg-zinc-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl text-gray-900 dark:text-slate-100 font-semibold ">
              Buttons
            </h2>
            <ThemeToggle />
          </div>

          <div className="space-y-6   p-6 ">
            <div className="flex flex-wrap  gap-4 border-b border-dashed border-gray-200 dark:border-gray-800 w-full md:w-auto pb-6 ">
              <Button size="xl" href="/">
                Default
              </Button>
              <Button size="xl" variant="outline" href="/">
                Outline
              </Button>

              <Button size="xl" variant="destructive" href="/">
                Destructive
              </Button>
              <Button size="xl" variant="secondary" href="/">
                Secondary
              </Button>
              <Button size="xl" variant="ghost" href="/">
                Ghost
              </Button>
              <Button size="xl" variant="link" href="/">
                Link <MdArrowRight className="ml-1 inline-block" />
              </Button>
            </div>
            <div className="flex flex-wrap  gap-4 border-b border-dashed border-gray-200 dark:border-gray-800 w-full md:w-auto pb-6 ">
              <Button size="lg" href="/">
                Default
              </Button>
              <Button size="lg" variant="outline" href="/">
                Outline
              </Button>

              <Button size="lg" variant="destructive" href="/">
                Destructive
              </Button>
              <Button size="lg" variant="secondary" href="/">
                Secondary
              </Button>
              <Button size="lg" variant="ghost" href="/">
                Ghost
              </Button>
              <Button size="lg" variant="link" href="/">
                Link <MdArrowRight className="ml-1 inline-block" />
              </Button>
            </div>
            <div className="flex flex-wrap  gap-4 border-b border-dashed border-gray-200 dark:border-gray-800 w-full md:w-auto pb-6 ">
              <Button size="md" href="/">
                Default
              </Button>
              <Button size="md" variant="outline" href="/">
                Outline
              </Button>

              <Button size="md" variant="destructive" href="/">
                Destructive
              </Button>
              <Button size="md" variant="secondary" href="/">
                Secondary
              </Button>
              <Button size="md" variant="ghost" href="/">
                Ghost
              </Button>
              <Button size="md" variant="link" href="/">
                Link <MdArrowRight className="ml-1 inline-block" />
              </Button>
            </div>
            <div className="flex flex-wrap  gap-4 border-b border-dashed border-gray-200 dark:border-gray-800 w-full md:w-auto pb-6 ">
              <Button size="sm" href="/">
                Default
              </Button>
              <Button size="sm" variant="outline" href="/">
                Outline
              </Button>

              <Button size="sm" variant="destructive" href="/">
                Destructive
              </Button>
              <Button size="sm" variant="secondary" href="/">
                Secondary
              </Button>
              <Button size="sm" variant="ghost" href="/">
                Ghost
              </Button>
              <Button size="sm" variant="link" href="/">
                Link <MdArrowRight className="ml-1 inline-block" />
              </Button>
            </div>

            <div className="flex flex-wrap  gap-4 w-full md:w-auto ">
              <Button size="xs" href="/">
                Default
              </Button>
              <Button size="xs" variant="outline" href="/">
                Outline
              </Button>
              <Button size="xs" variant="destructive" href="/">
                Destructive
              </Button>
              <Button size="xs" variant="secondary" href="/">
                Secondary
              </Button>
              <Button size="xs" variant="ghost" href="/">
                Ghost
              </Button>
              <Button size="xs" variant="link" href="/">
                Link <MdArrowRight className="ml-1 inline-block" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
