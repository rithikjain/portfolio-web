import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import spike from "../assets/spike.png";
import { motion } from "framer-motion";

const Projects = ({ setPage, pageVariants, pageTransition }) => {
  useEffect(() => {
    setPage(1);
  });

  const projectsList = [
    {
      image: spike,
      title: "Spike",
      description:
        "Spike is a Short Videos App built for artists and creators. Spike uses Spaces to help you find your people that Create and Consume the same content!",
      github: "https://github.com/ProjectSpike/spike-app",
      website: "https://spikeapp.in",
    },
    {
      image: spike,
      title: "Second Project",
      description:
        "This is the second project that I have worked on and yeah blah blah and more",
      github: "https://github.com/ProjectSpike/spike-app",
      website: "https://spikeapp.in",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const length = projectsList.length;

  const nextPage = () => {
    setCurrentPage(currentPage === length - 1 ? 0 : currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage === 0 ? length - 1 : currentPage - 1);
  };

  return (
    <motion.div
      className="flex h-full items-center justify-center"
      exit="out"
      initial="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="h-3/4 w-11/12 sm:w-10/12 flex items-center">
        <IoIosArrowBack
          size="50"
          className="cursor-pointer mb-16 transition duration-400 ease-in-out transform hover:-translate-x-1 hover:scale-125"
          onClick={prevPage}
        />

        {projectsList.map((project, index) => {
          return (
            <div
              key={index}
              className={
                index === currentPage ? "card active w-full h-full" : "card"
              }
            >
              {index === currentPage && (
                <ProjectCard
                  img={project.image}
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  website={project.website}
                />
              )}
            </div>
          );
        })}

        <IoIosArrowForward
          size="50"
          className="cursor-pointer mb-16 transition duration-400 ease-in-out transform hover:translate-x-1 hover:scale-125"
          onClick={nextPage}
        />
      </div>
    </motion.div>
  );
};

export default Projects;
