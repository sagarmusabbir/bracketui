import { Card } from "@thirdbracket/bracketui";
import Image from "next/image";

const Feature2 = () => {
  const features = [
    {
      title: "Expertise & Flexibility",
      description:
        "Experience agency expertise with freelancer flexibility with an unified team of top-rated professionals.",
      icon: "👨‍💻",
    },
    {
      title: "Modern Stack",
      description: "Delivering the best of both worlds: Next.js and WordPress.",
      icon: "⚡",
    },
    {
      title: "Built for Growth",
      description:
        "We don’t just build websites; from the start, we ensure your site is optimized for SEO.",
      icon: "🌟",
    },
    {
      title: "Seamless Collaboration ",
      description:
        "Unlike freelancers working in silos, our developers, marketers, and designers collaborate seamlessly.",
      icon: "🤝",
    },
    {
      title: "No Lock-in, No Bloat",
      description:
        "We provide transparent, scalable solutions without unnecessary overhead.",
      icon: "🔓",
    },
    {
      title: "Get Started",
      description:
        "Get started with Third bracket today to unlock unlimited achievement which was impossible before.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto space-y-8 md:space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl  font-bold  text-gray-950 dark:text-gray-200 mb-4">
            Why Choose Third Bracket?
          </h2>
          <p className="text-base md:text-xl text-gray-800/70 dark:text-gray-200/40 ">
            We deliver cutting-edge solutions with a focus on performance,
            scalability, and user experience
          </p>
        </div>

        {/* Image Section */}
        <div className=" relative h-[250px] rounded-xl overflow-hidden">
          <Image
            src="/website.svg" // Replace with your image path
            alt="Third Bracket Features"
            fill
            className="object-cover  h-full w-auto grayscale dark:hue-rotate-15"
            priority
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-2">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature2;
