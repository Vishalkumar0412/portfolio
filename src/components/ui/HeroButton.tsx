"use client";
import { Download } from "lucide-react";
import React from "react";

const HeroButton = () => {
  const handleClick = () => {
    window.open("/Vishal_Kumar_Resume.pdf", "_blank");
  };

  return (
    <button className="p-[3px] relative" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 flex gap-2 bg-black rounded-[6px] relative cursor-pointer group transition duration-200 text-white hover:bg-transparent">
        <Download />
        Download Resume
      </div>
    </button>
  );
};

export default HeroButton;
