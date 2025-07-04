import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import { FloatingNav } from "@/app/components/ui/FloatingNavbar";
import Projects from "@/app/components/Projects";
;
import { TimelineDemo } from "@/app/components/Timeline";
import { FaHome, FaInfo } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import { ContactForm } from "./components/ContactFrom";
import Footer from "./components/Footer";


const navItems = [
  {name:"Home" , link:"#" ,icon:<FaHome />},
  { name: "About", link: "#about" ,icon:<FaInfo/>},
  { name: "Projects", link: "#projects" ,icon:<GrProjects/>},
  { name: "Contact", link: "#contact",icon:<IoCallSharp/> },
];

export default function Home() {
  return (
   <main className="relative bg-black flex justify-center items-center mx-auto sm:px-10 px-5 overflow-x-hidden ">
    <div className="max-w-7xl w-full  hide-scrollbar overflow-auto">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Skills/>
      <TimelineDemo/>
      <Projects/>
      <ContactForm />
      <Footer/>

    </div>

   </main>
  );
}
