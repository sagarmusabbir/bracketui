import { Button } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen px-4 py-8 space-y-8">
      <h1 className="text-5xl font-semibold">Buttons</h1>
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl font-medium">Server Button</h2>
        <div className="flex flex-wrap gap-4 items-baseline">
          <h3 className="text-3xl">Vairients:</h3>
          <Button variant="base" href="/dashboard">
            Click me
          </Button>
          <Button variant="glow" href="/dashboard">
            Click me
          </Button>
          <Button variant="framed" href="/dashboard">
            Click me
          </Button>
          <Button variant="ghost" href="/dashboard">
            Click me
          </Button>
          <Button variant="dim" href="/dashboard">
            Click me
          </Button>
          <Button variant="link" href="/dashboard">
            Click me
          </Button>
          {/* <Button disabled>Disabled</Button> */}
        </div>
        <div className="flex flex-wrap gap-4 items-baseline">
          <h3 className="text-3xl">Sizes:</h3>
          <Button variant="base" size="pill" href="/dashboard">
            Click me
          </Button>
          <Button variant="base" size="sm" href="/dashboard">
            Click me
          </Button>
          <Button variant="base" size="md" href="/dashboard">
            Click me
          </Button>
          <Button variant="base" size="lg" href="/dashboard">
            Click me
          </Button>
          <Button variant="base" size="xl" href="/dashboard">
            Click me
          </Button>
        </div>
      </div>
    </main>
  );
}
