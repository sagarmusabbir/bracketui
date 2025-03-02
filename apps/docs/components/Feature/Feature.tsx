// "use client";
// import Image from "next/image";

// import { BiChevronRight, BiQuestionMark } from "react-icons/bi";
// import Link from "next/link";
// import { Card, Navlink } from "@thirdbracket/bracketui";

// const Features = () => {
//   return (
//     <section className="py-16 md:py-20 lg:py-24 ">
//       <div className="space-y-8 md:space-y-10 lg:space-y-12 ">
//         {/* Header group */}
//         <div className="flex flex-col lg:flex-row items-center  justify-center  gap-4   px-4 lg:px-0 max-w-4xl   pb-4 lg:max-w-5xl mx-auto ">
//           <h2 className=" text-[1.65rem]/[2rem] md:text-3xl   font-bold  lg:text-right text-center bg-gradient-to-r  from-gray-800 via-gray-900 to-gray-800 dark:from-gray-200 dark:via-gray-100 dark:to-gray-200 text-transparent bg-clip-text ">
//             Think Your Business Can’t Afford a&nbsp;Professional&nbsp;Start?
//           </h2>

//           <p className="text-base md:text-xl  lg:text-left text-gray-800/70 dark:text-gray-200/40  text-center ">
//             Backed by a team of top-rated freelancers, now you can get the
//             professional start your business deserves.
//           </p>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start mx-auto justify-center">
//           {/* Left Column - Featured Feature Card */}
//           <Card
//             href="#"
//             className="h-full "
//             cover={
//               <div className="w-full h-full flex items-center justify-center  ">
//                 <Image
//                   src="card1.svg"
//                   width={500}
//                   height={500}
//                   alt=""
//                   className="aspect-video object-contain dark:grayscale-[1] grayscale-[0.8]"
//                 ></Image>
//               </div>
//             }
//             header="Website Is Your Business’s First Impression"
//           >
//             Make your first impression count with a custom website—something
//             your business couldn’t afford until now.
//           </Card>

//           {/* Right Column - Stack of Cards */}
//           <div className="space-y-4">
//             <Card header="Finding the Right UI is Frustrating, right!">
//               We’ve Simplified It. Piecing together UI elements is
//               time-consuming. We provide a React component library and Elementor
//               templates for WordPress—modern, flexible, and ready to use.
//             </Card>

//             <Card header="Missing Modern Features?">
//               Your Website Deserves Better. Most websites lack speed and SEO
//               optimization. We use Next.js features like server-side rendering
//               and image optimization to give you an edge.
//             </Card>

//             <Card header="Struggling to Find the Right Marketer?">
//               Get a Whole Team. Hiring a good freelancer is hit-or-miss, and
//               agencies are expensive. Our developers, designers, and marketers
//               work as one to drive real results.
//             </Card>

//             <Card href="#" isExternal header="SEO Takes Too Long?">
//               We Speed It Up. SEO can be slow and unpredictable. Our AI-driven
//               strategies and marketplace expertise accelerate rankings and
//               improve visibility faster.
//             </Card>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <Navlink
//             as={Link}
//             href="#"
//             className="inline-flex items-center gap-1 text-gray-950 dark:text-white"
//           >
//             Explore All Features
//             <BiChevronRight size={20} />
//           </Navlink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;
