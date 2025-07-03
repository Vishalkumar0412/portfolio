"use client"
import React from "react";
import { motion, easeInOut } from "framer-motion";
import { skills } from "@/app/data";
import SkillCard from "./SkillCard";

// Parent container animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // delay between each child animation
    },
  },
};

// Each SkillCard animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeInOut } },
};

const Skills = () => {
  return (
    <section className="flex items-center flex-col my-10">
      <div className="w-full">
        <h1 className="text-3xl font-bold my-4 uppercase text-left">Tools and Tech Stack</h1>
      </div>
      <motion.div
        className="w-full rounded-4xl px-6 py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-6"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {skills?.map((skill) => (
          <motion.div key={skill.id} variants={cardVariants}>
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
