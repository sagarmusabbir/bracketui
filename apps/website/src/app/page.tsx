// import { Button, Card, ThemeToggle } from "@thirdbracket/bracketui";
import { MdArrowRight } from "react-icons/md";
import { RiGhostLine } from "react-icons/ri";
import {
  BiPlus,
  BiCheck,
  BiUser,
  BiTrash,
  BiDownload,
  BiEdit,
  BiUserPlus,
} from "react-icons/bi";
import { Button, Card, ThemeToggle } from "@thirdbracket/bracketui";
import Image from "next/image";
import {
  PiBoxArrowUpDuotone,
  PiFastForwardCircleDuotone,
  PiGithubLogoDuotone,
  PiUserDuotone,
} from "react-icons/pi";

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

        <section className="mb-12 bg-slate-50 dark:bg-zinc-950 pb-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between p-6 mb-6 rounded-t-lg bg-slate-300/20 dark:bg-zinc-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl text-gray-900 dark:text-slate-100 font-medium">
              Variants
            </h2>
            <ThemeToggle />
          </div>
          <div className="gap-4 flex flex-wrap p-6">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            {/* <Button variant="destructive">Destructive</Button> */}
            <Button variant="glass">Glass</Button>
            <Button variant="flat">Flat</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* 2. Sizes Section */}
        <section className="mb-12 bg-slate-50 dark:bg-zinc-950 pb-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between p-6 mb-6 rounded-t-lg bg-slate-300/20 dark:bg-zinc-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl text-gray-900 dark:text-slate-100 font-medium">
              Sizes
            </h2>
            <ThemeToggle />
          </div>
          <div className="gap-4 flex flex-wrap p-6">
            <Button size="xl">Extra Large</Button>
            <Button size="lg">Large</Button>
            <Button size="md">Medium</Button>
            <Button size="sm">Small</Button>
            <Button size="xs">Extra Small</Button>
          </div>
        </section>

        {/* 3. Pill Buttons Section */}
        <section className="mb-12 bg-slate-50 dark:bg-zinc-950 pb-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between p-6 mb-6 rounded-t-lg bg-slate-300/20 dark:bg-zinc-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl text-gray-900 dark:text-slate-100 font-medium">
              Pill Buttons
            </h2>
            <ThemeToggle />
          </div>
          <div className="gap-4 flex flex-wrap p-6">
            <Button pill variant="default">
              Default Pill
            </Button>
            <Button pill variant="secondary">
              Secondary Pill
            </Button>
            {/* <Button pill variant="destructive">
              Destructive Pill
            </Button> */}
            <Button pill variant="glass">
              Glass Pill
            </Button>
            <Button pill variant="flat">
              Flat Pill
            </Button>
            <Button pill variant="outline">
              Outline Pill
            </Button>
            <Button pill variant="ghost">
              Ghost Pill
            </Button>
          </div>
        </section>

        {/* 4. Text + Icon Buttons Section */}
        <section className="mb-12 bg-slate-50 dark:bg-zinc-950 pb-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between p-6 mb-6 rounded-t-lg bg-slate-300/20 dark:bg-zinc-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl text-gray-900 dark:text-slate-100 font-medium">
              With Icon
            </h2>
            <ThemeToggle />
          </div>
          <div className="gap-4 flex flex-wrap p-6">
            <Button icon={<BiPlus />} size="md" iconPosition="start">
              Add Item
            </Button>
            <Button
              variant="secondary"
              icon={<BiDownload />}
              size="md"
              iconPosition="end"
            >
              Download
            </Button>
            <Button variant="glass" icon={<BiPlus />} size="md" pill>
              New
            </Button>
            <Button icon={<BiTrash />} size="md" variant="destructive">
              Delete
            </Button>
            <Button icon={<BiEdit />} size="md" variant="outline">
              Edit
            </Button>
            <Button icon={<BiCheck />} size="md" variant="flat">
              Confirm
            </Button>
          </div>
        </section>

        {/* 5. Avatar / Icon-only Buttons Section */}
        <section className="mb-12 bg-slate-50 dark:bg-zinc-950 pb-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between p-6 mb-6 rounded-t-lg bg-slate-300/20 dark:bg-zinc-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl text-gray-900 dark:text-slate-100 font-medium">
              Avatar Buttons
            </h2>
            <ThemeToggle />
          </div>
          <div className="gap-4 flex flex-wrap p-6">
            <Button
              icon={<PiUserDuotone />}
              variant="avatar"
              size="md"
              aria-label="Profile"
            />
            <Button
              icon={<PiBoxArrowUpDuotone />}
              variant="avatar"
              size="lg"
              aria-label="Admin"
            />
            <Button
              icon={<PiGithubLogoDuotone />}
              variant="avatar"
              size="xl"
              aria-label="Guest"
            />
            <Button
              icon={<BiTrash />}
              variant="avatar"
              size="md"
              aria-label="Delete"
            />
            <Button
              icon={<BiPlus />}
              variant="avatar"
              size="lg"
              aria-label="Add"
            />
            <Button
              icon={<BiCheck />}
              variant="avatar"
              size="md"
              aria-label="Confirm"
            />
          </div>
        </section>

        {/* 6. Custom / Special Buttons Section */}
        <section className="mb-12 bg-slate-50 dark:bg-zinc-950 pb-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between p-6 mb-6 rounded-t-lg bg-slate-300/20 dark:bg-zinc-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl text-gray-900 dark:text-slate-100 font-medium">
              Custom Buttons
            </h2>
            <ThemeToggle />
          </div>
          <div className="gap-4 flex flex-wrap p-6">
            <Button size="md" variant="glass">
              Glass Medium
            </Button>
            <Button size="lg" variant="flat">
              Flat Large
            </Button>
            <Button pill size="md" variant="outline">
              Outline Pill
            </Button>
            <Button pill size="lg" variant="secondary">
              Secondary Large Pill
            </Button>
            <Button icon={<BiDownload />} pill size="md">
              Download Pill
            </Button>
          </div>
        </section>

        {/* 7. Card Variants */}
        <section className="mb-12 bg-slate-50 dark:bg-zinc-950 pb-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between p-6 mb-6 rounded-t-lg bg-slate-300/20 dark:bg-zinc-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl text-gray-900 dark:text-slate-100 font-medium">
              Card Variants
            </h2>
            <ThemeToggle />
          </div>
          <div className="gap-4 flex flex-wrap p-6">
            <Card
              variant="default"
              title="Product Card"
              description="Perfect for e-commerce product listings"
              image="/118.svg"
              category="E-commerce"
            />
            <Card
              variant="elevated"
              title="Blog Post"
              description="Great for article previews and blog content"
              image="/100.svg"
              category="Content"
            />
            <Card
              variant="flat"
              title="Feature Card"
              description="Ideal for showcasing app features and benefits"
              category="Features"
            />
            <Card
              variant="glass"
              title="Hero Section"
              description="Modern glass effect for landing page sections"
              category="Design"
            />
            <Card
              variant="outline"
              title="Pricing Plan"
              description="Clean outline style for pricing tiers"
              category="Pricing"
            />
            <Card
              variant="ghost"
              href="/dashboard"
              clickable
              title="Navigation Card"
              description="Subtle interactive card for navigation"
              category="Navigation"
            />
          </div>
        </section>

        {/* 8. Card Sizes */}
        <section className="mb-12 bg-slate-50 dark:bg-zinc-950 pb-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between p-6 mb-6 rounded-t-lg bg-slate-300/20 dark:bg-zinc-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl text-gray-900 dark:text-slate-100 font-medium">
              Card Sizes
            </h2>
            <ThemeToggle />
          </div>
          <div className="gap-4 flex flex-wrap items-start justify-center p-6">
            <div className="w-48">
              <Card
                size="sm"
                variant="elevated"
                title="Small Card"
                description="Compact size for sidebars"
                image="/64.svg"
              />
            </div>
            <div className="w-56">
              <Card
                size="md"
                variant="elevated"
                title="Medium Card"
                description="Standard size for most use cases"
                image="/82.svg"
              />
            </div>
            <div className="w-64">
              <Card
                size="lg"
                variant="elevated"
                title="Large Card"
                description="Prominent display for important content"
                image="/100.svg"
                category="Featured"
              />
            </div>
            <div className="w-80">
              <Card
                size="xl"
                variant="elevated"
                title="Extra Large Card"
                description="Hero cards for landing pages and featured content sections"
                image="/118.svg"
                category="Hero Content"
              />
            </div>
          </div>
        </section>

        {/* 9. Payload CMS Buttons */}
        <section className="mb-12 bg-slate-50 dark:bg-zinc-950 pb-8 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between p-6 mb-6 rounded-t-lg bg-slate-300/20 dark:bg-zinc-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl text-gray-900 dark:text-slate-100 font-medium">
              Payload CMS Integration
            </h2>
            <ThemeToggle />
          </div>
          <div className="gap-4 flex flex-wrap p-6">
            <Button
              href="/blog/example-post"
              variant="default"
            >
              Reference Link (Pages)
            </Button>
            <Button
              href="https://example.com"
              external
              variant="outline"
            >
              External Link
            </Button>
            <Button
              href="/contact"
              variant="secondary"
            >
              Custom Internal Link
            </Button>
          </div>
          <div className="px-6 pb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enhanced Button component with Payload CMS link handling: reference links, external links, and custom navigation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
