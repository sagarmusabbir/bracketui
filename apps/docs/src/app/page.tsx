// import { Button, Card } from "@thirdbracket/core";

import { Button, Card } from "@thirdbracket/bracketui";

import {
  BracketUIIcon,
  ButtonIcon,
  CardIcon,
  FooterIcon,
  HeaderIcon,
  NavbarIcon,
  ThemeToggleIcon,
} from "../../components/icons";

export default function Page() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <div>
        <section className="container   py-8 mx-auto text-center lg:py-16  px-6 lg:px-8">
          <h1 className="p-4 md:p-8 mt-16  font-bold text-center text-gray-950 dark:text-white text-4xl md:text-5xl lg:text-6xl leading-none ">
            The Minimal UI Component Library for React
          </h1>
          <p className="p-4 md:p-8 text-base md:text-lg lg:text-xl  text-center max-w-2xl mx-auto  text-gray-500 ">
            A modern, minimal UI component library for React applications with
            TypeScript support.
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

        <section className="container px-6 lg:px-8 py-8 mx-auto text-center lg:py-16 ">
          <div className="lg:flex items-center justify-center gap-4 space-y-2 lg:space-y-0">
            <h2 className="font-semibold text-center text-3xl md:text-4xl lg:text-5xl leading-none text-gray-950 dark:text-white">
              What's in Bracket UI?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-500">
              Modern components for building responsive React applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto justify-center py-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card href="#" header="Type-Safe Components">
                Built with TypeScript for enhanced developer experience and code
                reliability. Catch errors before they reach production.
              </Card>

              <Card href="#" header="Dark Mode Support">
                Seamless dark mode integration with smart theming system. Switch
                between light and dark themes effortlessly.
              </Card>

              <Card href="#" header="Zero Config Responsive">
                Responsive by default. Components adapt to different screen
                sizes without additional configuration.
              </Card>

              <Card href="#" header="Modern Design System">
                Clean, minimal design with consistent spacing, modern effects,
                and semantic color scales.
              </Card>
            </div>
            <div className="col-span-1">
              <Card href="#" header="Bracket UI" cover={<BracketUIIcon />}>
                A modern, minimal UI component library built for React
                applications with focus on developer experience and design
                consistency.
              </Card>
            </div>
          </div>
        </section>

        <section className="container  py-8 mx-auto text-center lg:py-16 px-6 lg:px-8">
          <h1 className="font-semibold text-center  text-3xl md:text-4xl lg:text-5xl leading-none text-gray-950 dark:text-white">
            Our Components
          </h1>
          <p className=" text-base md:text-lg lg:text-xl  text-center    text-gray-600 dark:text-gray-500 mt-2">
            It is a long established fact that a reader will be distracted
          </p>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mx-auto justify-center py-8 ">
            <Card href="#" header="Button Component" cover={<ButtonIcon />}>
              Customizable button component with various sizes and variants
            </Card>

            <Card href="#" header="Card Component" cover={<CardIcon />}>
              Flexible card component with support for headers and custom
              content
            </Card>

            <Card href="#" header="Navbar Component" cover={<NavbarIcon />}>
              Responsive navigation bar with customizable links and branding
            </Card>

            <Card href="#" header="Footer Component" cover={<FooterIcon />}>
              Adaptable footer component with multiple layout options
            </Card>

            <Card href="#" header="Theme Toggle" cover={<ThemeToggleIcon />}>
              Simple theme toggle component for dark/light mode switching
            </Card>

            <Card href="#" header="Header Component" cover={<HeaderIcon />}>
              Versatile header component for page titles and descriptions
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
