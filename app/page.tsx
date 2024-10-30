// "use client";

import ConnectAndChat from "./connect-and-chat/page";
// import ConnectPage from "./connect-page/page";
import FaceOfBeanYou from "./face-of-you/page";
import Footer from "./footer/page";
import HeroPage from "./hero/page";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";

// export default function Homepage() {
//   const pathname = usePathname();

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/competition", label: "Competition" },
//     { href: "/social-media", label: "Social media" },
//   ];

//   const NavLinks = () => (
//     <>
//       {navLinks.map((link) => (
//         <li key={link.href}>
//           <Link
//             href={link.href}
//             className={`hover:text-primary transition-colors ${
//               pathname === link.href ? "underline font-semibold" : ""
//             }`}
//           >
//             {link.label}
//           </Link>
//         </li>
//       ))}
//     </>
//   );

//   return (
//     <div className="min-h-screen h-screen bg-[#8B4513] text-white relative overflow-hidden flex flex-col">
//       <div className="container mx-auto px-4 flex-grow flex flex-col h-full">
//         <header className="flex justify-between items-center py-4 relative z-10">
//           <Image
//             src="/logo-removebg-preview.png"
//             alt="Bean You Logo"
//             width={120}
//             height={60}
//             className="object-contain"
//           />
//           <nav className="hidden md:block">
//             <ul className="flex space-x-6 text-lg">
//               <NavLinks />
//             </ul>
//           </nav>
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">Open menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent>
//               <nav className="flex flex-col space-y-4 mt-8">
//                 <NavLinks />
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </header>

//         <main className="flex-grow flex flex-col md:flex-row relative h-full">
//           <div className="w-full md:w-1/2 relative flex-grow h-full">
//             <Image
//               src="/bg-girl-image.png"
//               alt="Smiling person"
//               layout="fill"
//               objectFit="contain"
//               objectPosition="center"
//               className="mix-blend-multiply md:object-contain md:object-left-center"
//             />
//           </div>
//           <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center md:relative absolute inset-0 md:inset-auto">
//             <div className="bg-black bg-opacity-50 p-6 rounded-lg md:bg-transparent md:p-0">
//               <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
//                 <span className="text-white md:text-[#FFA07A]">
//                   Its not Just{" "}
//                 </span>
//                 <span className="text-white md:text-black">coffee</span>,
//               </h1>
//               <h2 className="text-xl sm:text-2xl md:text-4xl text-white md:text-yellow-300 font-semibold mb-6">
//                 Its an expression of yourself.
//               </h2>
//               <p className="text-base sm:text-lg md:text-xl max-w-md mb-8 text-white md:text-inherit">
//                 Be the Face of Change with Bean You: Join Our Gen Z Revolution
//                 and Represent Us on the Boldest conversations
//               </p>
//               <Button className="bg-[#CD5C5C] hover:bg-[#CD5C5C]/80 text-white font-bold py-3 sm:py-4 md:py-6 px-6 sm:px-8 md:px-12 rounded-full text-base sm:text-lg md:text-xl w-fit">
//                 Apply Here
//               </Button>
//             </div>
//           </div>
//         </main>
//       </div>
//       <div className="absolute -bottom-4 -right-8 md:right-0 md:bottom-0 w-1/3 h-1/3 md:w-1/3 md:h-1/3 overflow-hidden">
//         <div className="relative w-full h-full transform scale-50 sm:scale-75 -translate-y-1/4 translate-x-1/4 md:scale-100 md:-translate-y-1/4 md:translate-x-1/4 rotate-[-60deg] origin-bottom-right">
//           <Image
//             src="/coffee-cup.png"
//             alt="Bean coffee cup splashing"
//             layout="fill"
//             objectFit="contain"
//             objectPosition="right bottom"
//             className="mix-blend-multiply"
//           />
//         </div>
//       </div>

//       {/* Coffee splash image */}
//       <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 md:right-16 md:bottom-16 w-1/5 h-1/5 sm:w-1/4 sm:h-1/4">
//         <Image
//           src="/coffee-splash.png"
//           alt="Coffee splash"
//           layout="fill"
//           objectFit="contain"
//           objectPosition="right bottom"
//         />
//       </div>
//     </div>
//   );
// }
export default function Homepage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <div id="hero" className="snap-start">
        <HeroPage />
      </div>
      <div id="face-of-bean-you" className="snap-start">
        <FaceOfBeanYou />
      </div>
      <div id="connect-and-chat" className="snap-start">
        <ConnectAndChat />
      </div>
      <Footer />
    </div>
  )
  {/* <ConnectPage/> */}
}