// import { Button, Card } from "@thirdbracket/core";

import { Button, Card } from "@thirdbracket/bracketui";

export default function Page() {
  return (
    <main>
      <div>
        <section className="container  px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
          <h1 className="p-4 md:p-8 mt-16  font-extrabold text-center text-transparent text-4xl md:text-5xl lg:text-6xl leading-none from-gray-900 via-slate-700/90  to-gray-900 bg-gradient-to-r bg-clip-text ">
            The Minimal UI Component Library for React
          </h1>
          <p className="p-4 md:p-8 text-base md:text-lg lg:text-xl  text-center max-w-2xl mx-auto  text-gray-700">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex flex-wrap gap-2 items-center mx-auto justify-center py-8 ">
            <div className="hidden lg:flex">
              <Button size="xl" variant="outline">
                Get Started
              </Button>
            </div>
            <div className="hidden lg:flex">
              <Button size="xl">Our Components</Button>
            </div>
            <div className="lg:hidden ">
              <Button size="lg" variant="outline">
                Get Started
              </Button>
            </div>
            <div className="lg:hidden">
              <Button size="lg">Our Components</Button>
            </div>
          </div>
        </section>

        <section className="container px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
          <div className="lg:flex items-center justify-center gap-4 space-y-2 lg:space-y-0">
            <h1 className="   font-extrabold text-center text-transparent text-2xl md:text-3xl lg:text-4xl leading-none from-gray-800 via-slate-700 to-gray-950 bg-gradient-to-r bg-clip-text ">
              Whats in Bracket UI?
            </h1>
            <p className=" text-base md:text-lg lg:text-xl  text-center    text-gray-700">
              It is a long established fact that a reader will be distracted
            </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch mx-auto justify-center py-8 ">
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card header="Main Feature">
                It is a long established fact that a reader will be distracted.
              </Card>

              <Card header="Card">
                It is a long established fact that a reader will be distracted.
              </Card>
              <Card header="Main Feature">
                It is a long established fact that a reader will be distracted.
              </Card>

              <Card header="Card">
                It is a long established fact that a reader will be distracted.
              </Card>
            </div>
            <div>
              <Card image="./button.svg" header="Badge">
                It is a long established fact that a reader will be distracted.
              </Card>
            </div>
          </div>
        </section>
        <section className="container px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
          <h1 className="p-8   font-extrabold text-center text-transparent text-2xl md:text-3xl lg:text-4xl leading-none from-gray-800 via-slate-700 to-gray-950 bg-gradient-to-r bg-clip-text border border-dashed">
            Our Components
          </h1>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mx-auto justify-center py-8 ">
            <div>
              <Card image="./button.svg" header="Button">
                It is a long established fact that a reader will be distracted.
              </Card>
            </div>
            <div>
              <Card image="./button.svg" header="Card">
                It is a long established fact that a reader will be distracted.
              </Card>
            </div>
            <div>
              <Card image="./button.svg" header="Navbar">
                It is a long established fact that a reader will be distracted.
              </Card>
            </div>
            <div>
              <Card image="./button.svg" header="Footer">
                It is a long established fact that a reader will be distracted.
              </Card>
            </div>
            <div>
              <Card image="./button.svg" header="Badge">
                It is a long established fact that a reader will be distracted.
              </Card>
            </div>
            <div>
              <Card image="./button.svg" header="Form">
                It is a long established fact that a reader will be distracted.
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
