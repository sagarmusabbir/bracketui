// import React, { useState } from "react";

// interface NavbarProps {
//   brand: {
//     logo: React.ReactNode;
//     name: string;
//   };
//   links: {
//     label: string;
//     href: string;
//   }[];
//   cta?: {
//     label: string;
//     href: string;
//   };
//   children?: React.ReactNode;
// }

// const Navbar: React.FC<NavbarProps> = ({ brand, links, cta, children }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               {brand && (
//                 <a href="/" className="text-white font-bold text-xl">
//                   {brand.logo}
//                   <span className="text-black ml-2">{brand.name}</span>
//                 </a>
//               )}
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {links.map((link) => (
//                   <a
//                     key={link.label}
//                     href={link.href}
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     {link.label}
//                   </a>
//                 ))}
//                 {cta && (
//                   <a
//                     href={cta.href}
//                     className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     {cta.label}
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* ...
//           Mobile Menu ... */}
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Icon when menu is closed. */}
//               {isMenuOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
//         id="mobile-menu"
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {links.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               {link.label}
//             </a>
//           ))}
//           {cta && (
//             <a
//               href={cta.href}
//               className="bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               {cta.label}
//             </a>
//           )}
//         </div>
//       </div>

//       {/* Render any child elements passed to the component */}
//       {children}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";

// export const Links: React.FC<NavLinkProps> = ({ href, children }) => {
//     return (
//         <a
//             href={href}
//             className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//         >
//             {children}
//         </a>
//     );

// };

// export const Brand: React.FC<NavBrandProps> = ({ logo, children }) => {
//     return (
//         <>
//             {logo && (
//                 <>
//                   {logo}
//                   <span className="text-white ml-2">{children}</span>
//                 </>
//               )}
//         </>
//     );
// };

// import React, { useState } from "react";

// interface BrandProps {
//   logo: React.ReactNode;
//   name: string;
// }

// const Brand: React.FC<BrandProps> = ({ logo, name }) => (
//   <div className="flex-shrink-0">
//     {logo}
//     <span className="text-white ml-2">{name}</span>
//   </div>
// );

// interface LinkProps {
//   href: string;
//   label: string;
// }

// const Link: React.FC<LinkProps> = ({ href, label }) => (
//   <a
//     href={href}
//     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//   >
//     {label}
//   </a>
// );

// interface NavbarProps {
//   brand: BrandProps;
//   links: LinkProps[];
// }

// const Navbar: React.FC<NavbarProps> = ({ brand, links }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Brand logo={brand.logo} name={brand.name} />
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {links.map((link) => (
//                   <Link key={link.href} href={link.href} label={link.label} />
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               type="button"
//               className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded={isMenuOpen}
//               onClick={toggleMenu}
//             >
//               {/* Hamburger icon (e.g., using a library like Heroicons) */}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
//         {/* ... Mobile menu content (if applicable) ... */}
//       </div>
//     </nav>
//   );
// };

// export { Navbar, Brand, Link };
