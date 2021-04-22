import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Projects = ({ setPage }) => {
  useEffect(() => {
    setPage(1);
  });

  const projectsList = [
    {
      company: "Winuall",
      position: "Android Developer Intern",
      duration: "Jul 2020 - Aug 2020",
      info1:
        "Winuall is a startup based out of Bangalore. It specialises in helping coaching centers go digital.",
      info2:
        "Worked on some Android thing and blah blah blah was fun and learnt a lot!",
    },
    {
      company: "XYZ",
      position: "GoLang",
      duration: "Jul 2020 - Aug 2020",
      info1:
        "Winuall is a startup based out of Bangalore. It specialises in helping coaching centers go digital.",
      info2:
        "Worked on some Android thing and blah blah blah was fun and learnt a lot!",
    },
    {
      company: "ABC",
      position: "Kotlin",
      duration: "Jul 2020 - Aug 2020",
      info1:
        "Winuall is a startup based out of Bangalore. It specialises in helping coaching centers go digital.",
      info2:
        "Worked on some Android thing and blah blah blah was fun and learnt a lot!",
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
    <div className="flex h-full items-center justify-center">
      <div className="h-3/4 w-10/12 flex items-center">
        <IoIosArrowBack
          size="50"
          className="cursor-pointer mb-16"
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
              {index === currentPage && <ProjectCard />}
            </div>
          );
        })}

        <IoIosArrowForward
          size="50"
          className="cursor-pointer mb-16"
          onClick={nextPage}
        />
      </div>
    </div>
  );
};

export default Projects;
