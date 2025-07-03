import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import HeroButton from "./ui/HeroButton";
import Grid from "./Grid";
import { FloatingDock } from "./ui/floating-dock";
import { Linkedin ,Github} from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { ContainerTextFlip } from "./ui/container-text-flip";

const Hero = () => {

  const socialMedia=[
    { title: 'LinkedIn', 
      icon: <CiLinkedin />,
       href: 'string' 
      },
    { title: 'GitHub', 
      icon: <FaGithub />,
       href: 'string' 
      },
    { title: 'X', 
      icon: <FaXTwitter />,
       href: 'string' 
      },
    { title: 'LeetCode', 
      icon: <SiLeetcode />,
       href: 'string' 
      },
    { title: 'Discord', 
      icon: <FaDiscord />,
       href: 'string' 
      },
  ]
  return (
    <div className=" overflow-hidden">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Hero Content */}
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center space-y-6">
          

            <TextGenerateEffect
              className="text-[40px]  md:text-4xl lg:text-6xl font-bold"
              words=" Hi, I'm vishal kumar a Software developer Developer"
            />
           

          
            <HeroButton/>
            <FloatingDock items={socialMedia}/>

          </div>
        </div>
      </div>
          <Grid/>
    </div>
  );
};

export default Hero;
