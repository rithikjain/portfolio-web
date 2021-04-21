import React, { useState } from "react";
import WorkCard from "../components/WorkCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Work = () => {
  const workList = [
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
  const length = workList.length;

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

        {workList.map((work, index) => {
          return (
            <div
              key={index}
              className={index === currentPage ? "card active w-full" : "card"}
            >
              {index === currentPage && (
                <WorkCard
                  company={work.company}
                  position={work.position}
                  duration={work.duration}
                  info1={work.info1}
                  info2={work.info2}
                />
              )}
            </div>
          );
        })}

        {/*
        <div key={currentPage} className="w-full card active">
          <WorkCard
            company={workList[currentPage].company}
            position={workList[currentPage].position}
            duration={workList[currentPage].duration}
            info1={workList[currentPage].info1}
            info2={workList[currentPage].info2}
          />
        </div>
        */}
        <IoIosArrowForward
          size="50"
          className="cursor-pointer mb-16"
          onClick={nextPage}
        />
      </div>
    </div>
  );
};

export default Work;
