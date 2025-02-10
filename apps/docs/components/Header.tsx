// // apps/docs/components/MainHeader.tsx
// import { FC } from "react";

// import Image from "next/image";
// // Assuming you have these icons
// import {
//   Megamenu,
//   MegamenuSection,
//   MobileNav,
//   Navbar,
//   Navbrand,
//   NavItem,
//   Navlink,
// } from "@thirdbracket/bracketui";
// import { BiCode, BiLayout, BiPalette } from "react-icons/bi";
// import { BsPlugin } from "react-icons/bs";
// import { GrDocument, GrResources } from "react-icons/gr";
// import { FaPallet } from "react-icons/fa6";

// const MainHeader: FC = () => {
//   return (
//     <Navbar>
//       <Navbrand>
//         <Image
//           src="/logo.svg"
//           width={32}
//           height={32}
//           alt="BracketUI"
//           className="dark:invert"
//         />
//         <span className="ml-2 font-semibold">BracketUI</span>
//       </Navbrand>

//       {/* Desktop Navigation */}
//       <NavItem>
//         <Megamenu label="Products">
//           <div className="grid grid-cols-12 gap-6 p-6">
//             {/* Main Features Column */}
//             <div className="col-span-4">
//               <MegamenuSection icon={<BiCode />} title="Core Features">
//                 <div className="space-y-3">
//                   <Navlink href="/docs/components" isDropdownItem>
//                     Components
//                   </Navlink>
//                   <Navlink href="/docs/hooks" isDropdownItem>
//                     Hooks
//                   </Navlink>
//                   <Navlink href="/docs/utilities" isDropdownItem>
//                     Utilities
//                   </Navlink>
//                 </div>
//               </MegamenuSection>

//               <MegamenuSection icon={<BiLayout />} title="Layout">
//                 <div className="space-y-3">
//                   <Navlink href="/docs/grid" isDropdownItem>
//                     Grid System
//                   </Navlink>
//                   <Navlink href="/docs/containers" isDropdownItem>
//                     Containers
//                   </Navlink>
//                   <Navlink href="/docs/spacing" isDropdownItem>
//                     Spacing
//                   </Navlink>
//                 </div>
//               </MegamenuSection>
//             </div>

//             {/* Design System Column */}
//             <div className="col-span-4">
//               <MegamenuSection icon={<BiPalette />} title="Design System">
//                 <div className="space-y-3">
//                   <Navlink href="/docs/theming" isDropdownItem>
//                     Theming
//                   </Navlink>
//                   <Navlink href="/docs/colors" isDropdownItem>
//                     Colors
//                   </Navlink>
//                   <Navlink href="/docs/typography" isDropdownItem>
//                     Typography
//                   </Navlink>
//                 </div>
//               </MegamenuSection>

//               <MegamenuSection icon={<BsPlugin />} title="Integrations">
//                 <div className="space-y-3">
//                   <Navlink href="/docs/next-js" isDropdownItem>
//                     Next.js
//                   </Navlink>
//                   <Navlink href="/docs/tailwind" isDropdownItem>
//                     Tailwind CSS
//                   </Navlink>
//                   <Navlink href="/docs/framer-motion" isDropdownItem>
//                     Framer Motion
//                   </Navlink>
//                 </div>
//               </MegamenuSection>
//             </div>

//             {/* Featured Section */}
//             <div className="col-span-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
//               <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
//                 Featured Resources
//               </h3>
//               <div className="space-y-4">
//                 <div className="aspect-video relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
//                   <Image
//                     src="/featured-resource.jpg"
//                     fill
//                     alt="Featured Resource"
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Navlink href="/getting-started" isDropdownItem>
//                     Getting Started Guide
//                   </Navlink>
//                   <Navlink href="/showcase" isDropdownItem>
//                     Component Showcase
//                   </Navlink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Megamenu>

//         <Megamenu label="Resources">
//           <div className="grid grid-cols-2 gap-6 p-6">
//             <MegamenuSection icon={<GrDocument />} title="Documentation">
//               <div className="space-y-3">
//                 <Navlink href="/docs" isDropdownItem>
//                   Introduction
//                 </Navlink>
//                 <Navlink href="/docs/installation" isDropdownItem>
//                   Installation
//                 </Navlink>
//                 <Navlink href="/docs/examples" isDropdownItem>
//                   Examples
//                 </Navlink>
//               </div>
//             </MegamenuSection>

//             <MegamenuSection icon={<GrResources />} title="Resources">
//               <div className="space-y-3">
//                 <Navlink href="/blog" isDropdownItem>
//                   Blog
//                 </Navlink>
//                 <Navlink href="/tutorials" isDropdownItem>
//                   Tutorials
//                 </Navlink>
//                 <Navlink href="/showcase" isDropdownItem>
//                   Showcase
//                 </Navlink>
//               </div>
//             </MegamenuSection>
//           </div>
//         </Megamenu>

//         <Navlink href="/pricing">Pricing</Navlink>
//         <Navlink href="/about">About</Navlink>
//       </NavItem>

//       {/* Mobile Navigation */}
//       <MobileNav>
//         <Megamenu label="Products" isMobile>
//           <div className="space-y-6 p-4">
//             <MegamenuSection icon={<BiCode />} title="Core Features" isMobile>
//               <div className="space-y-3">
//                 <Navlink href="/docs/components" isDropdownItem>
//                   Components
//                 </Navlink>
//                 <Navlink href="/docs/hooks" isDropdownItem>
//                   Hooks
//                 </Navlink>
//                 <Navlink href="/docs/utilities" isDropdownItem>
//                   Utilities
//                 </Navlink>
//               </div>
//             </MegamenuSection>

//             <MegamenuSection icon={<FaPallet />} title="Design System" isMobile>
//               <div className="space-y-3">
//                 <Navlink href="/docs/theming" isDropdownItem>
//                   Theming
//                 </Navlink>
//                 <Navlink href="/docs/colors" isDropdownItem>
//                   Colors
//                 </Navlink>
//                 <Navlink href="/docs/typography" isDropdownItem>
//                   Typography
//                 </Navlink>
//               </div>
//             </MegamenuSection>
//           </div>
//         </Megamenu>

//         <Megamenu label="Resources" isMobile>
//           <div className="space-y-6 p-4">
//             <MegamenuSection
//               icon={<GrDocument />}
//               title="Documentation"
//               isMobile
//             >
//               <div className="space-y-3">
//                 <Navlink href="/docs" isDropdownItem>
//                   Introduction
//                 </Navlink>
//                 <Navlink href="/docs/installation" isDropdownItem>
//                   Installation
//                 </Navlink>
//                 <Navlink href="/docs/examples" isDropdownItem>
//                   Examples
//                 </Navlink>
//               </div>
//             </MegamenuSection>
//           </div>
//         </Megamenu>

//         <Navlink href="/pricing">Pricing</Navlink>
//         <Navlink href="/about">About</Navlink>
//       </MobileNav>
//     </Navbar>
//   );
// };

// export default MainHeader;
