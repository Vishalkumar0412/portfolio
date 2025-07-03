"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
type Skill = {
  id: number;
  title: string;
  icon: string;
  alt: string;
};
const SkillCard = ({ skill }: { skill:Skill}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="md:min-h-20 md:min-w-30 border border-blue-500 shadow-xs hover:shadow-lg shadow-blue-300 py-2 px-2 h-20 w-30 min-h-15 min-w-24 md:h-15 md:w-24  rounded-lg flex flex-col items-center justify-center"
      style={{
        background: "#020024",
        backgroundColor:
          " linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(34, 0, 255, 1) 100%)",
      }}
    >
      <div>
        <Image
          src={skill.icon}
          alt={skill.alt}
          width={0}
          height={0}
          className="h-10 w-auto" // ✅ Tailwind auto-width
          style={{  width: "auto" }}
        />{" "}
      </div>
      <div>
        <span>{skill.title}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
