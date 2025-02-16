// import { Button, Card } from "@thirdbracket/core";

import { Bracket, Card } from "@thirdbracket/bracketui";

import {
  ButtonIcon,
  CardIcon,
  FooterIcon,
  HeaderIcon,
  NavbarIcon,
  ThemeToggleIcon,
} from "../../components/icons";

import {
  RiServerLine,
  RiDatabase2Line,
  RiCloudLine,
  RiShieldKeyholeLine,
  RiPlugLine,
  RiTestTubeLine,
} from "react-icons/ri";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiPlanetscale,
  SiDocker,
  SiVercel,
  SiGithubactions,
  SiAuth0,
  SiFirebase,
  SiJsonwebtokens,
  SiPassport,
  SiStripe,
  SiAlgolia,
  SiSendgrid,
  SiJest,
  SiCypress,
  SiPostman,
  SiGraphql,
  SiRedis,
  SiCloudflare,
  SiNextdns,
  SiAwslambda,
} from "react-icons/si";
import Table from "../../components/table";

import { PiBracketsSquareBold } from "react-icons/pi";
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";
import Services from "../../components/Services";

export default function Page() {
  const tableData = [
    {
      header: {
        icon: <RiServerLine className="w-6 h-6" />,
        text: "Backend",
      },
      cells: [
        {
          icon: <SiNextdotjs />,
          text: "Next.js API",
        },
        {
          icon: <SiNodedotjs />,
          text: "Node.js",
        },
        {
          icon: <SiExpress />,
          text: "Express.js",
        },
        {
          icon: <SiGraphql />,
          text: "GraphQL",
        },
        {
          icon: <SiRedis />,
          text: "Redis",
        },
      ],
    },
    {
      header: {
        icon: <RiDatabase2Line className="w-6 h-6" />,
        text: "Database",
      },
      cells: [
        {
          icon: <SiPrisma />,
          text: "Prisma ORM",
        },
        {
          icon: <SiMongodb />,
          text: "MongoDB",
        },
        {
          icon: <SiPostgresql />,
          text: "PostgreSQL",
        },
        {
          icon: <SiSupabase />,
          text: "Supabase",
        },
        {
          icon: <SiPlanetscale />,
          text: "PlanetScale",
        },
      ],
    },
    {
      header: {
        icon: <RiCloudLine className="w-6 h-6" />,
        text: "DevOps & Infrastructure",
      },
      cells: [
        {
          icon: <SiVercel />,
          text: "Vercel",
        },
        {
          icon: <SiDocker />,
          text: "Docker",
        },
        {
          icon: <SiAwslambda />,
          text: "AWS",
        },
        {
          icon: <SiGithubactions />,
          text: "GitHub Actions",
        },
        {
          icon: <SiCloudflare />,
          text: "Cloudflare",
        },
        {
          icon: <SiNextdns />,
          text: "NextDNS",
        },
      ],
    },
    {
      header: {
        icon: <RiShieldKeyholeLine className="w-6 h-6" />,
        text: "Security & Authentication",
      },
      cells: [
        {
          icon: <SiNextdotjs />,
          text: "NextAuth.js",
        },
        {
          icon: <SiAuth0 />,
          text: "Auth0",
        },
        {
          icon: <SiJsonwebtokens />,
          text: "JWT",
        },
        {
          icon: <SiPassport />,
          text: "Passport",
        },
        {
          icon: <SiFirebase />,
          text: "Firebase Auth",
        },
      ],
    },
    {
      header: {
        icon: <RiPlugLine className="w-6 h-6" />,
        text: "Third Party & APIs",
      },
      cells: [
        {
          icon: <SiStripe />,
          text: "Stripe",
        },
        {
          icon: <SiAlgolia />,
          text: "Algolia",
        },
        {
          icon: <SiSendgrid />,
          text: "SendGrid",
        },
        {
          icon: <SiGraphql />,
          text: "GraphQL",
        },
      ],
    },
    {
      header: {
        icon: <RiTestTubeLine className="w-6 h-6" />,
        text: "Testing & Debugging",
      },
      cells: [
        {
          icon: <SiJest />,
          text: "Jest",
        },
        {
          icon: <SiCypress />,
          text: "Cypress",
        },

        {
          icon: <SiPostman />,
          text: "Postman",
        },
      ],
    },
  ];
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <Hero />
        <Feature />
        <Services />

        <section className="space-y-8 py-16 md:py-24">
          <div>
            <Table data={tableData} />
          </div>
        </section>
      </Bracket>
    </main>
  );
}
