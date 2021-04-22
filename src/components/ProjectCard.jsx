import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ img, title, description, github, website }) => {
  return (
    <div className="h-full flex mb-16 items-center justify-center">
      <div className="m-24 ml-0">
        <img src={img} alt="Spike" />
      </div>
      <div className="flex flex-col justify-center w-2/5">
        <h1 className="font-bold text-5xl">{title}</h1>
        <div className="bg-black h-1 w-14 ml-1 mt-2"></div>
        <div>
          <p className="ml-1 my-12">{description}</p>
        </div>
        <div className="flex mt-24">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="35" className="ml-1 cursor-pointer" />
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <FiExternalLink size="35" className="ml-6 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
