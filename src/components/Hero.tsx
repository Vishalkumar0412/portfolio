"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "motion/react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import HeroButton from "./ui/HeroButton";
import Grid from "./Grid";
import { FloatingDock } from "./ui/floating-dock";

import { CiLinkedin } from "react-icons/ci";
import { FaDiscord, FaGithub, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import { MdEmail } from "react-icons/md";

const Hero = () => {
  const socialMedia = [
    { title: "LinkedIn", icon: <CiLinkedin />, href: "https://www.linkedin.com/in/vishalkumar0412/" },
    { title: "GitHub", icon: <FaGithub />, href: "https://github.com/Vishalkumar0412" },
    { title: "X", icon: <FaXTwitter />, href: "https://x.com/4vishalnigam" },
    { title: "LeetCode", icon: <SiLeetcode />, href: "https://leetcode.com/vishalkumar0412" },
    { title: "Discord", icon: <FaDiscord />, href: "https://discordapp.com/users/1069662056439087135" },
    { title: "WhatsApp", icon: <FaWhatsapp />, href: "https://wa.me/917906338792" },
    { title: "Call", icon: <FaPhoneAlt />, href: "tel:+917906338792" },
    { title: "Email", icon: <MdEmail />, href: "mailto:vishalkumar042@outlook.com" },
  ];
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
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Hero Content */}
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-2 justify-center relative my-20 z-10">
          <motion.div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center space-y-6">
            <TextGenerateEffect
              className="text-[35px]  md:text-4xl lg:text-6xl font-bold"
              words="Hi I'm Vishal Kumar — ready to contribute as your next Software Engineer."
            />
            <div className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 space-y-1">
              <p>
                 Email:{" "}
                <a
                  href="mailto:vishalkumar042@outlook.com"
                  className="underline text-blue-100 hover:text-white"
                >
                  vishalkumar042@outlook.com
                </a>
              </p>
              <p>
                 Phone:{" "}
                <a
                  href="tel:+917906338792"
                  className="underline text-blue-100 hover:text-white"
                >
                  +91 7906338792
                </a>
              </p>
            </div>

            <HeroButton />
            <FloatingDock items={socialMedia} desktopClassName={`w-fit `} />
          </motion.div>
        </div>
      </div>
      <Grid />
    </div>
  );
};

export default Hero;
