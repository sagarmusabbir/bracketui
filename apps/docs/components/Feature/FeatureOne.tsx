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
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Title group with flex layout on large screens */}
        <div className="mx-auto mb-8 lg:mb-16 max-w-4xl lg:max-w-6xl lg:flex lg:items-center lg:justify-between lg:gap-8">
          <h2 className="mb-4 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:mb-0 lg:max-w-2xl text-center lg:text-right">
            Think Your Business Can't Afford a Professional Start?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 lg:text-xl lg:max-w-xl lg:flex-shrink-0 text-center lg:text-left">
            Backed by a team of top-rated freelancers, now you can get the
            professional start your business deserves.
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-8">
          {/* Top row - Two cards with images */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card
              cover={
                <div className="relative h-48 w-full lg:h-64">
                  <Image
                    src="/feat.svg"
                    alt="Enterprise Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              }
              header="Enterprise Solutions"
            >
              Get enterprise-grade solutions without the overhead cost. Our
              platform provides scalable, secure, and reliable services that
              grow with your business.
            </Card>

            <Card
              cover={
                <div className="relative h-48 w-full lg:h-64">
                  <Image
                    src="/wide.svg"
                    alt="Professional Teams"
                    fill
                    className="object-cover"
                  />
                </div>
              }
              header="Professional Teams"
            >
              Access a network of verified professionals ready to take your
              business to the next level. Collaborate with experts who
              understand your vision.
            </Card>
          </div>

          {/* Bottom row - Three cards without images */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card header="Rapid Development">
              Launch your projects faster with our streamlined development
              process and pre-built components. Save time without compromising
              quality.
            </Card>

            <Card header="Scalable Infrastructure">
              Built on modern cloud infrastructure, our platform ensures your
              applications can handle growth and peak demands efficiently.
            </Card>

            <Card header="24/7 Support">
              Round-the-clock support from our dedicated team ensures your
              business operations run smoothly without interruption.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
