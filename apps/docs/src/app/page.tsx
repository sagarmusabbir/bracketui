import { Button, Card } from "@thirdbracket/bracketui";

export default function Page() {
  return (
    <main className="grid grid-rows-[screen_1fr_screen] items-center justify-items-center min-h-screen p-4  gap-16 divide-y">
      <section className="space-y-8 py-16 ">
        <h1 className="text-5xl font-semibold text-center ">Buttons</h1>
        <h2 className="text-2xl  text-center max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </h2>
        <div className="flex flex-wrap gap-4 items-baseline">
          <h3 className="text-3xl">Vairients:</h3>

          <Button variant="default" color="default">
            Click me
          </Button>
          <Button variant="pill" color="default">
            Click me
          </Button>

          <Button variant="flat" color="default">
            Click me
          </Button>
          <Button variant="outline" color="default">
            Click me
          </Button>
          <Button variant="sharp" color="default">
            Click me
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-baseline">
          <h3 className="text-3xl">Sizes:</h3>
          <Button size="sm">Click me</Button>

          <Button size="md">Click me</Button>
          <Button size="lg">Click me</Button>
          <Button size="xl">Click me</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-baseline">
          <h3 className="text-3xl">Colors:</h3>

          <Button color="default">Click me</Button>
          <Button color="blue">Click me</Button>

          <Button color="green">Click me</Button>
          <Button color="red">Click me</Button>
          <Button color="orange">Click me</Button>
          <Button color="gray">Click me</Button>
        </div>
      </section>
      <section className="space-y-8 py-16 ">
        <h1 className="text-5xl font-semibold text-center">Feature</h1>
        <h2 className="text-2xl  text-center max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   grid-flow-row gap-4">
          <Card header="NoCard" image="./card3.svg">
            Automatic Image, Font, and Script Optimizations for improved UX and
            Core Web Vitals.
          </Card>
          <Card header="NoCard" image="./card2.svg">
            Automatic Image, Font, and Script Optimizations for improved UX and
            Core Web Vitals.
          </Card>
          <Card header="NoCard" image="./card4.svg">
            Automatic Image, Font, and Script Optimizations for improved UX and
            Core Web Vitals.
          </Card>
          <Card header="My Card Random">
            Automatic Image, Font, and Script Optimizations for improved UX and
            Core Web Vitals.
          </Card>
          <Card header="Another Card">
            Free Download Activity 54 SVG vector file in monocolor and
            multicolor type for Sketch and Figma
          </Card>
          <Card header="Card">
            Collection of useful tools and generators for Tailwind to create,
            design and customize all kind of web components using a
          </Card>
        </div>
      </section>
    </main>
  );
}
