// // components/Features.tsx
// "use client";

// import { BiChevronRight } from "react-icons/bi";

// import Link from "next/link";
// import { Card, Navlink } from "@thirdbracket/bracketui";

// const Features = () => {
//   return (
//     <section className="space-y-2  py-12 sm:py-16 md:py-20">
//       <div className="lg:flex items-center justify-center gap-4 space-y-2 lg:space-y-0 ">
//         <h2 className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl    text-gray-950 dark:text-white ">
//           Our Solutions
//         </h2>
//         <p className="text-base lg:text-lg text-center  text-gray-500     ">
//           End-to-end digital solutions for modern businesses
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mx-auto justify-center py-8">
//         {/* Left Column - Featured Solution Card */}

//         <Card
//           href="#"
//           className="h-full"
//           isExternal
//           cover={
//             <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#282828fg_1px,transparent_1px),linear-gradient(to_bottom,#282828fg_1px,transparent_1px)] bg-[size:24px_24px]">
//               <svg
//                 version="1.1"
//                 viewBox="0 0 361.88 361.88"
//                 xmlSpace="preserve"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-48 h-48 fill-gray-500"
//               >
//                 <path d="m336.88 49.448h-311.88c-13.785 0-25 11.215-25 25v212.98c0 13.785 11.215 25 25 25h311.88c13.785 0 25-11.215 25-25v-212.98c0-13.786-11.215-25-25-25zm15 237.98c0 8.271-6.728 15-15 15h-311.88c-8.271 0-15-6.729-15-15v-170.96h341.88v170.96zm0-180.96h-341.88v-32.02c0-8.271 6.729-15 15-15h311.88c8.272 0 15 6.729 15 15v32.02z" />
//                 <path d="m38.85 177.49h21.854c5.29 0 9.579-4.289 9.579-9.579v-21.854c0-5.29-4.289-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.288 9.579 9.579 9.579z" />
//                 <path d="m91.314 177.49h21.854c5.29 0 9.579-4.289 9.579-9.579v-21.854c0-5.29-4.289-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.289 9.579 9.579 9.579z" />
//                 <path d="m143.78 177.49h21.854c5.29 0 9.579-4.289 9.579-9.579v-21.854c0-5.29-4.289-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.288 9.579 9.579 9.579z" />
//                 <path d="m196.24 177.49h21.854c5.29 0 9.579-4.289 9.579-9.579v-21.854c0-5.29-4.289-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.289 9.579 9.579 9.579z" />
//                 <path d="m248.71 177.49h21.854c5.29 0 9.579-4.289 9.579-9.579v-21.854c0-5.29-4.289-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.289 9.579 9.579 9.579z" />
//                 <path d="m301.17 177.49h21.854c5.29 0 9.579-4.289 9.579-9.579v-21.854c0-5.29-4.288-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.289 9.579 9.579 9.579z" />
//                 <path d="m98.476 220.37v-21.854c0-5.29-4.289-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.288 9.579 9.579 9.579h21.854c5.29 1e-3 9.579-4.288 9.579-9.579z" />
//                 <path d="m141.36 229.95c5.29 0 9.579-4.288 9.579-9.579v-21.854c0-5.29-4.289-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.289 9.579 9.579 9.579h21.854z" />
//                 <path d="m193.83 229.95c5.29 0 9.579-4.288 9.579-9.579v-21.854c0-5.29-4.288-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.289 9.579 9.579 9.579h21.854z" />
//                 <path d="m246.29 229.95c5.29 0 9.579-4.288 9.579-9.579v-21.854c0-5.29-4.289-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.288 9.579 9.579 9.579h21.854z" />
//                 <path d="m298.75 229.95c5.29 0 9.579-4.288 9.579-9.579v-21.854c0-5.29-4.289-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.854c0 5.29 4.289 9.579 9.579 9.579h21.854z" />
//                 <path d="m38.85 282.42h21.854c5.29 0 9.579-4.289 9.579-9.579v-21.853c0-5.29-4.289-9.579-9.579-9.579h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.853c0 5.29 4.288 9.579 9.579 9.579z" />
//                 <path d="m323.02 241.41h-21.854c-5.29 0-9.579 4.289-9.579 9.579v21.853c0 5.29 4.289 9.579 9.579 9.579h21.854c5.29 0 9.579-4.289 9.579-9.579v-21.853c0-5.29-4.288-9.579-9.579-9.579z" />
//                 <path d="m270.56 241.41h-179.25c-5.29 0-9.579 4.289-9.579 9.579v21.853c0 5.29 4.289 9.579 9.579 9.579h179.25c5.29 0 9.579-4.289 9.579-9.579v-21.853c0-5.29-4.289-9.579-9.579-9.579z" />
//               </svg>
//             </div>
//           }
//           header="Web Development"
//         >
//           Modern web applications built with cutting-edge technologies. From
//           responsive websites to complex web applications, we deliver scalable
//           solutions that drive business growth.
//         </Card>

//         {/* Right Column - Stack of Cards */}
//         <div className="space-y-4">
//           {/* Infrastructure */}
//           <Card header=" Infrastructure">
//             Cloud-native infrastructure solutions with AWS, focusing on
//             scalability, security, and cost optimization.
//           </Card>

//           {/* DevOps */}
//           <Card header="DevOps">
//             Streamline your development workflow with our CI/CD pipelines and
//             automated deployment solutions.
//           </Card>

//           {/* Digital Marketing */}
//           <Card header="  Digital Marketing">
//             Data-driven digital marketing strategies to increase your online
//             presence and drive customer engagement.
//           </Card>

//           {/* WordPress Solutions */}
//           <Card href="#" isExternal header="   WordPress Solutions">
//             Custom WordPress development, optimization, and maintenance for
//             business websites and e-commerce platforms.
//           </Card>
//         </div>
//       </div>

//       <div className="flex justify-center mt-8">
//         <Navlink
//           as={Link}
//           href="#"
//           className="inline-flex items-center gap-1 text-gray-950 dark:text-white"
//         >
//           Explore All Solutions
//           <span className="inline-flex items-center">
//             <BiChevronRight size={20} />
//           </span>
//         </Navlink>
//       </div>
//     </section>
//   );
// };

// export default Features;

// components/Features.tsx
"use client";

import { BiChevronRight } from "react-icons/bi";

import Link from "next/link";
import { Card, Navlink } from "@thirdbracket/bracketui";

const Features = () => {
  return (
    <section className="space-y-2 py-12 sm:py-16 md:py-20">
      <div className="lg:flex items-center justify-center gap-4 space-y-2 lg:space-y-0">
        <h2 className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl text-gray-950 dark:text-white">
          Key Features
        </h2>
        <p className="text-sm/6 lg:text-lg/8 text-center text-gray-500">
          Modern UI components designed for seamless development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mx-auto justify-center py-8">
        {/* Left Column - Featured Feature Card */}
        <Card
          href="#"
          className="h-full"
          isExternal
          cover={
            <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#282828fg_1px,transparent_1px),linear-gradient(to_bottom,#282828fg_1px,transparent_1px)] bg-[size:24px_24px]">
              <svg
                version="1.1"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 h-48 fill-gray-500"
              >
                <path
                  d="m10.944 2.4375c0.5833-0.58334 1.5291-0.58333 2.1124 0l2.8567 2.8566c0.5833 0.58333 0.5833 1.5291 0 2.1124l-2.8567 2.8566c-0.5833 0.5834-1.5291 0.5834-2.1124 0l-2.8567-2.8566c-0.58334-0.58334-0.58334-1.5291 0-2.1124l2.8567-2.8566zm1.0562 1.7722-2.1407 2.1407 2.1407 2.1407 2.1407-2.1407-2.1407-2.1407zm-6.7059 3.8774c0.58335-0.58334 1.5291-0.58334 2.1125 0l2.8566 2.8567c0.5834 0.5833 0.5834 1.5291 0 2.1124l-2.8566 2.8567c-0.58334 0.5833-1.5291 0.5833-2.1125 0l-2.8566-2.8567c-0.58334-0.5833-0.58333-1.5291 0-2.1124l2.8566-2.8567zm1.0562 1.7722-2.1407 2.1407 2.1407 2.1407 2.1407-2.1407-2.1407-2.1407zm10.243-1.7722c0.5833-0.58334 1.5291-0.58334 2.1125 0l2.8566 2.8567c0.5833 0.5833 0.5833 1.5291 0 2.1124l-2.8566 2.8567c-0.5834 0.5833-1.5292 0.5833-2.1125 0l-2.8566-2.8567c-0.5834-0.5833-0.5834-1.5291 0-2.1124l2.8566-2.8567zm1.0562 1.7722-2.1406 2.1407 2.1406 2.1407 2.1407-2.1407-2.1407-2.1407zm-6.7058 3.8775c0.5833-0.5834 1.5291-0.5834 2.1124 0l2.8567 2.8566c0.5833 0.5833 0.5833 1.5291 0 2.1125l-2.8567 2.8566c-0.5833 0.5833-1.5291 0.5833-2.1124 0l-2.8567-2.8566c-0.58334-0.5834-0.58334-1.5292 0-2.1125l2.8567-2.8566zm1.0562 1.7722-2.1407 2.1406 2.1407 2.1407 2.1407-2.1407-2.1407-2.1406z"
                  clip-rule="evenodd"
                  fill="#0F1729"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          }
          header="Component Library"
        >
          Extensive collection of fully customizable React components built with
          TypeScript and Tailwind CSS. Designed for maximum flexibility and ease
          of use.
        </Card>

        {/* Right Column - Stack of Cards */}
        <div className="space-y-4">
          {/* Theming System */}
          <Card header="Theming System">
            Powerful theming capabilities with dark mode support and
            customizable design tokens. Seamlessly integrate with your brand
            identity.
          </Card>

          {/* Accessibility */}
          <Card header="Accessibility">
            WCAG 2.1 compliant components with full keyboard navigation and
            screen reader support. Built with inclusivity in mind.
          </Card>

          {/* Customization */}
          <Card header="Easy Customization">
            Flexible styling system using Tailwind CSS utilities. Customize
            components without fighting against default styles.
          </Card>

          {/* TypeScript Support */}
          <Card href="#" isExternal header="TypeScript Ready">
            Built with TypeScript for better developer experience. Includes
            comprehensive type definitions and intelligent autocompletion.
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Navlink
          as={Link}
          href="#"
          className="inline-flex items-center gap-1 text-gray-950 dark:text-white"
        >
          Explore All Features
          <span className="inline-flex items-center">
            <BiChevronRight size={20} />
          </span>
        </Navlink>
      </div>
    </section>
  );
};

export default Features;
