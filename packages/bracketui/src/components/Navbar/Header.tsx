// // Example usage in your application
// import {
//   Navbar,
//   NavbarSection,
//   MobileMenuSection,
//   MobileMenuButton,
//   Navbrand,
//   Navlink,
//   Dropdown,
// } from "./";
// import { ThemeToggle } from "./../ThemeToggle";

// const Header = () => {
//   return (
//     <>
//       <Navbar>
//         {/* Brand Section */}
//         <NavbarSection>
//           <Navbrand logo="/path.svg">Bracket UI</Navbrand>
//         </NavbarSection>

//         {/* Desktop Navigation */}
//         <NavbarSection className="hidden md:flex space-x-4">
//           <Navlink href="#">Home</Navlink>
//           <Navlink href="#">About</Navlink>
//           <Dropdown label="Services">
//             <Navlink href="#" isDropdownItem>
//               Web Development
//             </Navlink>
//             <Navlink href="#" isDropdownItem>
//               UI/UX Design
//             </Navlink>
//             <Navlink href="#" isDropdownItem>
//               Consulting
//             </Navlink>
//           </Dropdown>
//           <Navlink href="#">Contact</Navlink>
//         </NavbarSection>

//         {/* Right Section */}
//         <NavbarSection className="flex items-center space-x-4">
//           <ThemeToggle />
//           <MobileMenuButton />
//         </NavbarSection>
//       </Navbar>

//       {/* Mobile Menu */}
//       <MobileMenuSection className="px-4">
//         <Navlink href="#">Home</Navlink>
//         <Navlink href="#">About</Navlink>
//         <Dropdown label="Services" isMobile>
//           <Navlink href="#" isDropdownItem>
//             Web Development
//           </Navlink>
//           <Navlink href="#" isDropdownItem>
//             UI/UX Design
//           </Navlink>
//           <Navlink href="#" isDropdownItem>
//             Consulting
//           </Navlink>
//         </Dropdown>
//         <Navlink href="#">Contact</Navlink>
//       </MobileMenuSection>
//     </>
//   );
// };

// export default Header;
