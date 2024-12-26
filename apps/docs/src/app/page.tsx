import { Button } from "@thirdbracket/bracketui";

export default function Page() {
  return (
    <main className="min-h-screen px-4 py-8 space-y-8 ">
      <h1>Web</h1>
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl font-medium">Buttons</h2>

        <div className="flex flex-wrap gap-4 items-baseline">
          <h3 className="text-3xl">Vairients:</h3>

          <Button variant="default" color="beige">
            Click me
          </Button>
          <Button variant="pill">Click me</Button>

          <Button variant="flat">Click me</Button>
          <Button variant="outline">Click me</Button>
          <Button variant="sharp">Click me</Button>

          {/* <Button disabled>Disabled</Button> */}
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
          <Button color="blue" variant="outline">
            Click me
          </Button>

          <Button color="green" variant="outline">
            Click me
          </Button>
          <Button color="red" variant="outline">
            Click me
          </Button>
          <Button color="orange" variant="outline">
            Click me
          </Button>

          <Button color="beige" variant="outline">
            Click me
          </Button>
          <Button color="gray" variant="outline">
            Click me
          </Button>
        </div>
      </div>
    </main>
  );
}
