import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import { TimelineDemo } from "@/components/Timeline";



export default function Home() {
  return (
   <main className="relative bg-black flex justify-center items-center mx-auto sm:px-10 px-5 overflow-x-hidden ">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Skills/>
      <Projects/>
      <TimelineDemo/>
    </div>

   </main>
  );
}
