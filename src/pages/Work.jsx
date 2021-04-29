import React, { useState, useEffect } from "react";
import WorkCard from "../components/WorkCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Work = ({ setPage, pageVariants, pageTransition }) => {
  useEffect(() => {
    setPage(2);
  });

  const workList = [
    {
      company: "Winuall",
      position: "Android Developer Intern",
      duration: "Jul 2020 - Aug 2020",
      info1:
        "Winuall is a startup based out of Bangalore. It specialises in helping coaching centers go digital.",
      info2:
        "I worked on their student facing app with Kotlin, enhancing the quiz and the document viewing experience.",
    },
    {
      company: "Smoketrees",
      position: "Freelance",
      duration: "May 2020 - Dec 2020",
      info1:
        "Smoketrees is the ultimate community of coders, who are dedicated to serving the world. They provide top-class services, in the friendliest manner, maintaining the highest programming standards.",
      info2:
        "Worked on several freelance projects involving frameworks like Flutter, Native Android and GoFiber.",
    },
    {
      company: "Spike",
      position: "Co-Founder",
      duration: "Jul 2020 - Present",
      info1:
        "Spike - Best community app for Musicians. It is a short-video community app, where talented individuals can find their own space!",
      info2:
        "Built the complete product from scratch, the mobile app is built using Flutter and the backend is written in Go using GoFiber. Currently leading a tech team of 3 members.",
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
          className="cursor-pointer scale-75 lg:scale-100 lg:hover:scale-90 mb-16 transition duration-400 ease-in-out transform hover:-translate-x-1 hover:scale-125"
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

        <IoIosArrowForward
          size="50"
          className="cursor-pointer scale-75 lg:scale-100 lg:hover:scale-90 mb-16 transition duration-400 ease-in-out transform hover:translate-x-1 hover:scale-125"
          onClick={nextPage}
        />
      </div>
    </motion.div>
  );
};

export default Work;
