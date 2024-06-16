import { Experience } from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Socials from "@/components/Socials";

import { Technology } from "@/components/Technology";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaLaptop, FaUser } from "react-icons/fa6";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center 
   flex-col overflow-hidden mx-auto sm:px-10 px-5">
       <div className="max-w-7xl w-full">
        <FloatingNav 
        navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          {name: 'About', link: '#about', icon: <FaUser />},
          {name: 'Projects', link: '#projects', icon: <FaLaptop />},
        ]
   } />
        <Hero/>
        <Grid />
        <Experience />
        <Technology />
        <Projects />
        <Socials />
      </div>
   </main>
  );
}
