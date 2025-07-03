"use client"
import React from "react";
import {motion} from "motion/react";

const SkillCard = ({ skill }) => {
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
        <img src={skill.icon} alt={skill.alt} className="h-10" />
      </div>
      <div>
        <span>{skill.title}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
