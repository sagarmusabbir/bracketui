// "use client";

// import { Tab, TabList, TabPanel, TabContent } from "@thirdbracket/bracketui";
// import {
//   PiCodeLight,
//   PiCloudLight,
//   PiRocketLaunchLight,
//   PiDatabaseLight,
//   PiShieldLight,
// } from "react-icons/pi";
// import Image from "next/image";
// import { DiResponsive } from "react-icons/di";

// const TabService = () => {
//   return (
//     <div className="py-12 sm:py-16 md:py-20">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white mb-4">
//           Our Services & Expertise
//         </h2>
//         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//           Comprehensive technology solutions to drive your business forward
//         </p>
//       </div>

//       <Tab defaultValue="code" className="w-full max-w-6xl mx-auto">
//         <TabList className="mb-8">
//           <TabPanel value="code" icon={<PiCodeLight className="w-5 h-5" />}>
//             Development
//           </TabPanel>
//           <TabPanel value="cloud" icon={<PiCloudLight className="w-5 h-5" />}>
//             Cloud Services
//           </TabPanel>
//           <TabPanel
//             value="devops"
//             icon={<PiRocketLaunchLight className="w-5 h-5" />}
//           >
//             DevOps
//           </TabPanel>
//         </TabList>

//         <TabContent value="code">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
//                 Modern Web Development
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 We build scalable, performant web applications using
//                 cutting-edge technologies and best practices.
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <DiResponsive className="w-6 h-6 text-blue-500 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900 dark:text-gray-100">
//                       Responsive Design
//                     </h4>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       Mobile-first approach ensuring perfect display across all
//                       devices
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <PiDatabaseLight className="w-6 h-6 text-blue-500 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900 dark:text-gray-100">
//                       Full-Stack Solutions
//                     </h4>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       End-to-end development from database to user interface
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2 pt-4">
//                 {[
//                   "React",
//                   "Next.js",
//                   "TypeScript",
//                   "Node.js",
//                   "PostgreSQL",
//                 ].map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="relative h-[400px] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden">
//               <Image
//                 src="/coding.png"
//                 alt="Web Development"
//                 fill
//                 className="object-contain p-8"
//               />
//             </div>
//           </div>
//         </TabContent>

//         <TabContent value="cloud">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
//                 Cloud Infrastructure
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Secure, scalable cloud solutions designed for modern businesses.
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <PiShieldLight className="w-6 h-6 text-blue-500 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900 dark:text-gray-100">
//                       Security First
//                     </h4>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       Enterprise-grade security with compliance and best
//                       practices
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <PiCloudLight className="w-6 h-6 text-blue-500 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900 dark:text-gray-100">
//                       Cloud Native
//                     </h4>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       Microservices architecture with containerized applications
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2 pt-4">
//                 {["AWS", "Docker", "Kubernetes", "Terraform", "CloudFront"].map(
//                   (tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   )
//                 )}
//               </div>
//             </div>

//             <div className="relative h-[400px] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden">
//               <Image
//                 src="/cloud.png"
//                 alt="Cloud Services"
//                 fill
//                 className="object-contain p-8"
//               />
//             </div>
//           </div>
//         </TabContent>

//         <TabContent value="devops">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
//                 DevOps Solutions
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Streamline your development workflow with automated CI/CD
//                 pipelines.
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <PiRocketLaunchLight className="w-6 h-6 text-blue-500 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900 dark:text-gray-100">
//                       Automated Deployments
//                     </h4>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       Continuous integration and deployment pipelines
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <PiDatabaseLight className="w-6 h-6 text-blue-500 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900 dark:text-gray-100">
//                       Infrastructure as Code
//                     </h4>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       Version-controlled infrastructure with automated
//                       provisioning
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2 pt-4">
//                 {[
//                   "GitHub Actions",
//                   "Jenkins",
//                   "Ansible",
//                   "Terraform",
//                   "Docker",
//                 ].map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="relative h-[400px] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden">
//               <Image
//                 src="/devops.png"
//                 alt="DevOps Solutions"
//                 fill
//                 className="object-contain p-8"
//               />
//             </div>
//           </div>
//         </TabContent>
//       </Tab>
//     </div>
//   );
// };

// export default TabService;
