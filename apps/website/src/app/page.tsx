import { Button, Card, ThemeToggle } from "@thirdbracket/bracketui";
import { MdArrowRight } from "react-icons/md";
import { RiGhostLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="min-h-screen py-8 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">BracketUI Website</h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Official BracketUI website
          </p>
        </header>

        <section className="mb-12 bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-slate-200 via-zinc-100 to-slate-200 dark:bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] dark:from-gray-800 dark:via-zinc-900 dark:to-gray-800 p-12 rounded-lg border border-slate-300 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-gray-900 dark:text-slate-100 font-semibold mb-6">
              Buttons
            </h2>
            <ThemeToggle />
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              href="/"
              size="xs"
              theme={{
                text: "text-white dark:text-black",
              }}
            >
              Get Started
            </Button>
            <Button
              href="/"
              size="sm"
              theme={{
                text: "text-white dark:text-black",
              }}
            >
              Get Started
            </Button>
            <Button
              href="/"
              size="md"
              theme={{
                text: "text-white dark:text-black",
              }}
            >
              Get Started
            </Button>
            <Button
              href="/"
              size="lg"
              theme={{
                text: "text-white dark:text-black",
              }}
            >
              Get Started
            </Button>
            <Button
              href="/"
              size="xl"
              theme={{
                text: "text-white dark:text-black",
              }}
            >
              Get Started
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              outline
              href="/"
              size="xs"
              theme={{ border: "border-gray-300 dark:border-gray-700" }}
            >
              Get Started
            </Button>
            <Button
              outline
              href="/"
              size="sm"
              theme={{ border: "border-gray-300 dark:border-gray-700" }}
            >
              Get Started
            </Button>
            <Button
              outline
              href="/"
              size="md"
              theme={{ border: "border-gray-300 dark:border-gray-700" }}
            >
              Get Started
            </Button>
            <Button
              outline
              href="/"
              size="lg"
              theme={{ border: "border-gray-300 dark:border-gray-700" }}
            >
              Get Started
            </Button>
            <Button
              outline
              theme={{ border: "border-gray-300 dark:border-gray-700" }}
              href="/"
              size="xl"
            >
              Get Started
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              href="/"
              size="sm"
              isLoading
              theme={{
                text: "text-white dark:text-black",
              }}
            >
              Get Started
            </Button>
            <Button
              href="/"
              size="md"
              disabled
              theme={{
                text: "text-white dark:text-black",
              }}
            >
              Button Disabled
            </Button>
            <Button
              href="/"
              size="lg"
              theme={{
                text: "text-white dark:text-black",
              }}
            >
              Get Started{" "}
              <span className="ml-2">
                <RiGhostLine />
              </span>
            </Button>
            <Button
              href="/"
              size="xl"
              theme={{
                text: "text-white dark:text-black",
              }}
            >
              Get Started
            </Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Cards</h2>
          <div className="flex flex-wrap gap-6 items-start">
            <Card size="sm" cover="/50.svg" isIcon>
              Icon Card Small
            </Card>
            <Card size="md" cover="/82.svg" isIcon>
              Icon Card Medium
            </Card>
            <Card size="lg" cover="/100.svg" isIcon>
              Icon Card Large
            </Card>
            <Card sizeMLElements size="xl" cover="/118.svg" isIcon>
              Icon Card Extra Large
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
