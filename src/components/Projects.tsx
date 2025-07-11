import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaGithub } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { projects } from "@/app/data";
import Image from "next/image";

const Projects = () => {
  return (
    <section id='projects'>
      <div>
        <h2 className="uppercase text-3xl text-white font-bold my-2">
          My Projects
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 grid-cols-1">
        {projects.map(({ id, title, des, img, github, link }) => (
          <CardContainer className="inter-var" key={id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
               {des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
               {
                link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-sm flex justify-evenly items-center gap-2 font-normal dark:text-white"
                  >
                    <CardItem
                      translateZ={20}
                      as="div"
                    >
                      <MdLaptopChromebook />
                      Live →
                    </CardItem>
                  </a>
                )
               }
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2  rounded-xl flex bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a
                    href={github}
                    className="justify-between items-center flex gap-2 "
                    target="_blank"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
