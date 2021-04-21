import React from "react";
import spike from "../assets/spike.png";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="h-full flex mb-16 items-center justify-center">
      <div className="m-24 ml-0">
        <img src={spike} alt="Spike" />
      </div>
      <div className="flex flex-col justify-center w-2/5">
        <h1 className="font-bold text-5xl">Spike</h1>
        <div className="bg-black h-1 w-14 ml-1 mt-2"></div>
        <div>
          <p className="ml-1 my-12">
            Spike is a Short Videos App built for artists and creators. Spike
            uses Spaces to help you find your people that Create and Consume the
            same content!
          </p>
        </div>
        <div className="flex mt-24">
          <AiFillGithub size="35" className="ml-1" />
          <FiExternalLink size="35" className="ml-6" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
