import { Button, Card } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen px-4 py-8 space-y-8">
      <h1 className="text-5xl font-semibold">Buttons</h1>
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl font-medium">Server Button</h2>
        <div className="flex flex-wrap gap-4 items-baseline">
          <h3 className="text-3xl">Vairients:</h3>
          <Button variant="base" href="#">
            Click me
          </Button>
          <Button variant="glow" href="#">
            Click me
          </Button>
          <Button variant="framed" href="#">
            Click me
          </Button>
          <Button variant="ghost" href="#">
            Click me
          </Button>
          <Button variant="dim" href="#">
            Click me
          </Button>
          <Button variant="link" href="#">
            Click me
          </Button>
          {/* <Button disabled>Disabled</Button> */}
        </div>
        <div className="flex flex-wrap gap-4 items-baseline">
          <h3 className="text-3xl">Sizes:</h3>
          <Button variant="base" size="pill" href="#">
            Click me
          </Button>
          <Button variant="base" size="sm" href="#">
            Click me
          </Button>
          <Button variant="base" size="md" href="#">
            Click me
          </Button>
          <Button variant="base" size="lg" href="#">
            Click me
          </Button>
          <Button variant="base" size="xl" href="#">
            Click me
          </Button>
        </div>
      </div>

      <h2>Basic usage</h2>
      <Card
        variant="basic"
        header="Basic Card Title"
        content="This is a basic card with just header and content."
      />

      <h2>With image</h2>
      <Card
        variant="with-image"
        header="Image Card Title"
        content="This card includes an image along with header and content."
        image={{
          src: "/card-image-1.jpg",
          alt: "Card image description",
        }}
      />
    </main>
  );
}
