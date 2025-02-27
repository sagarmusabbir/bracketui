import { Card } from "@thirdbracket/bracketui";
import { BiCloud, BiPaint, BiRocket, BiWorld } from "react-icons/bi";
import Image from "next/image";

const MasonryLayout = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Our Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Explore our comprehensive set of features and solutions
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {/* Tall Image Card */}

          <Card
            className="break-inside-avoid mb-4"
            cover={
              <div className="relative aspect-[4/5]">
                <Image
                  src="/tall.svg"
                  alt="Tall cover"
                  fill
                  className="object-cover"
                />
              </div>
            }
            header="Tall Feature Card"
          >
            This card features a tall image to create visual interest.
          </Card>

          {/* Icon Card */}
          <Card
            className="break-inside-avoid mb-4"
            isIcon
            cover={
              <BiRocket className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            }
            header="Quick Start"
          >
            Get started with our platform in minutes.
          </Card>
          <Card
            className="break-inside-avoid mb-4"
            isIcon
            cover={
              <BiRocket className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            }
            header="Quick Start"
          >
            Get started with our platform in minutes.
          </Card>

          {/* Wide Image Card */}
          <Card
            className="break-inside-avoid mb-4"
            cover={
              <div className="relative aspect-video">
                <Image
                  src="/wide.svg"
                  alt="Wide cover"
                  fill
                  className="object-cover"
                />
              </div>
            }
            header="Wide Feature"
          >
            A wider card with landscape image for variety.
          </Card>

          {/* Square Image Card */}
          <Card
            className="break-inside-avoid mb-4"
            cover={
              <div className="relative aspect-square">
                <Image
                  src="/square.svg"
                  alt="Square cover"
                  fill
                  className="object-cover"
                />
              </div>
            }
            header="Square Feature"
          >
            Perfect square image card for balanced content.
          </Card>

          {/* Icon Card with External Link */}
          <Card
            className="break-inside-avoid mb-4"
            isIcon
            isExternal
            href="https://example.com"
            cover={
              <BiWorld className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            }
            header="External Resource"
          >
            Check out our external documentation and resources.
          </Card>

          {/* Text-Only Card */}
          <Card className="break-inside-avoid mb-4" header="Simple Card">
            Sometimes less is more. This card focuses purely on textual content
            without any cover image or icon.
          </Card>

          {/* Icon Card with Long Content */}
          <Card
            className="break-inside-avoid mb-4"
            isIcon
            cover={
              <BiCloud className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            }
            header="Cloud Solutions"
          >
            Our cloud solutions provide scalable infrastructure with advanced
            security features and seamless integration capabilities. Perfect for
            growing businesses.
          </Card>

          {/* Small Image Card */}
          <Card
            className="break-inside-avoid mb-4"
            cover={
              <div className="relative aspect-[4/3]">
                <Image
                  src="/small.svg"
                  alt="Small cover"
                  fill
                  className="object-cover"
                />
              </div>
            }
            header="Compact Feature"
          >
            A smaller card for less prominent features.
          </Card>

          {/* Icon Card with Truncated Content */}
          <Card
            className="break-inside-avoid mb-4"
            isIcon
            truncate
            cover={
              <BiPaint className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            }
            header="Design System"
          >
            Comprehensive design system with consistent components and styling
            guidelines that will be truncated due to length.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MasonryLayout;
