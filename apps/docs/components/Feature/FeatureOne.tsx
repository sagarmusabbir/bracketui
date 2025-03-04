// import { Card } from "@thirdbracket/bracketui";
// import Image from "next/image";

// export function FeatureOne() {
//   return (
//     <section className="py-16 md:py-20 lg:py-24">
//       {/* Header Container */}
//       <div className="mx-auto max-w-screen-xl px-4">
//         {/* Title group with flex layout on large screens */}
//         <div className="mx-auto mb-12 max-w-4xl lg:flex lg:items-center lg:justify-between lg:gap-8">
//           <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:mb-0 lg:max-w-2xl">
//             Think Your Business Can't Afford a Professional Start?
//           </h2>
//           <p className="text-gray-500 dark:text-gray-400 sm:text-xl lg:max-w-xl">
//             Backed by a team of top-rated freelancers, now you can get the
//             professional start your business deserves.
//           </p>
//         </div>

//         {/* Cards Container */}
//         <div className="space-y-8">
//           {/* Top row - Two cards with images */}
//           <div className="grid gap-8 md:grid-cols-2">
//             <Card
//               cover={
//                 <div className="relative h-48 w-full lg:h-64">
//                   <Image
//                     src="/feat.svg"
//                     alt="Enterprise Solutions"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               }
//               header="Enterprise Solutions"
//             >
//               Get enterprise-grade solutions without the overhead cost. Our
//               platform provides scalable, secure, and reliable services that
//               grow with your business.
//             </Card>

//             <Card
//               cover={
//                 <div className="relative h-48 w-full lg:h-64">
//                   <Image
//                     src="/wide.svg"
//                     alt="Professional Teams"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               }
//               header="Professional Teams"
//             >
//               Access a network of verified professionals ready to take your
//               business to the next level. Collaborate with experts who
//               understand your vision.
//             </Card>
//           </div>

//           {/* Bottom row - Three cards without images */}
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             <Card header="Rapid Development">
//               Launch your projects faster with our streamlined development
//               process and pre-built components. Save time without compromising
//               quality.
//             </Card>

//             <Card header="Scalable Infrastructure">
//               Built on modern cloud infrastructure, our platform ensures your
//               applications can handle growth and peak demands efficiently.
//             </Card>

//             <Card header="24/7 Support">
//               Round-the-clock support from our dedicated team ensures your
//               business operations run smoothly without interruption.
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Card } from "@thirdbracket/bracketui";
import Image from "next/image";

export function FeatureOne() {
  return (
    <section className="py-8 md:py-16 ">
      {/* Header Container */}
      <div className="mx-auto max-w-screen-xl ">
        {/* Title group with flex layout on large screens */}
        <div className="mx-auto mb-8 lg:mb-16 max-w-md sm:max-w-4xl lg:max-w-6xl lg:flex lg:items-center lg:justify-between lg:gap-8">
          <h2 className="mb-4 text-3xl leading-none lg:text-4xl font-bold  text-gray-800 dark:text-gray-200 lg:mb-0 text-left lg:text-right">
            Think Your Business Can't Afford a Professional Start?
          </h2>
          <p className="text-gray-900/70 dark:text-gray-50/60 lg:text-xl  lg:max-w-xl lg:flex-shrink-0 text-left lg:text-left">
            We bring enterprise-level web development and digital marketing
            solutions within your budget, so you never feel left behind.
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-8">
          {/* Top row - Two cards with images */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card
              href="#"
              cover={
                <div className="relative h-48 w-full lg:h-64">
                  <Image
                    src="/website.svg"
                    alt="Enterprise Solutions"
                    fill
                    className="object-cover dark:invert hue-rotate-90"
                  />
                </div>
              }
              header="Your Website Reflects your budget"
            >
              Your Website Is Your Business’s First Impression. Make your first
              impression count with a custom website—something your business
              couldn’t afford until now.
            </Card>

            <Card
              href="#"
              cover={
                <div className="relative h-48 w-full lg:h-64">
                  <Image
                    src="/ui.svg"
                    alt="Professional Teams"
                    fill
                    className="object-cover  dark:invert"
                  />
                </div>
              }
              header="Finding the Right UI is Frustrating!"
            >
              We’ve simplified UI design. Introducing Bracket UI—a minimal,
              geometric, pixel-perfect component library ehich is Open-source
              and ready for React & Next.js.
            </Card>
          </div>

          {/* Bottom row - Three cards without images */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card header="Missing Modern Features?">
              Your Website Deserves More. Most budget websites miss out on
              essential features like image optimization, edge performance,
              accelerated rendering, cloud functions, and more. Now, experience
              them all—without raising your budget.
            </Card>

            <Card header="Struggling to Find the Right Marketer?">
              Get a Whole Team. Finding the right freelancer is a gamble, and
              agencies break the bank. Our integrated team of marketers,
              developers, and designers delivers real results that drive your
              business forward.
            </Card>

            <Card header="SEO Takes Too Long!">
              SEO can be slow and unpredictable. Our AI-driven strategies and
              marketplace expertise accelerate rankings and improve visibility
              faster.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
