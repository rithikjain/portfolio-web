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
      company: "FamPay",
      position: "Android Engineering Intern",
      duration: "September 2022 - Present",
      info1:
        "Researched and implemented SSL Pinning in the app",
      info2:
        "Implemented UPI disputes and issues resolution mechanism",
      info3:
        "Fixed the top occurring bug which affected 1.3K users and caused 1.6K crashes in a span of 7 days",
    },
    {
      company: "Atom EI",
      position: "Product Engineering Intern",
      duration: "January 2022 - March 2022",
      info1:
        "Worked on the Meditation App which has 500K+ downloads.",
      info2:
        "Used product frameworks like Psych Analysis, DIBB, AARRR, Jobs to be done and also made Product Requirement Docs",
    },
    {
      company: "Spike: Community App for Musicians",
      position: "Co-Founder",
      duration: "July 2020 - November 2021",
      info1:
        "Built the Flutter App, Backend in Go, Landing Page in React from scratch. Worked on social media and user acquisition too",
      info2:
        "17000+ lines of code in the Flutter App and 4000+ in the backend",
      info3: 
        "Automated the process of building the backend Docker image, sending it to ECR and then deploying it on ECS using GitHub Actions",
    },
    {
      company: "Nearcast",
      position: "Flutter Developer",
      duration: "April 2021 - July 2021",
      info1:
        "Developed the MVP for Nearcast - A neighbourhood social network.",
      info2:
        "Developed a maintainable codebase using Clean Architecture",
      info3:
        "Optimised the app to run smoothly which resulted in low runtimeerrors as measured by sentry",
    },
    {
      company: "Winuall",
      position: "Android Developer Intern",
      duration: "July 2020 - August 2020",
      info1:
        "Winuall is a startup based out of Bangalore. It specialises in helping coaching centers go digital.",
      info2:
        "I worked on their student facing app with Kotlin, enhancing the quiz and the document viewing experience.",
    },
    {
      company: "Smoketrees",
      position: "Freelance",
      duration: "May 2020 - December 2020",
      info1:
        "Smoketrees is the ultimate community of coders, who are dedicated to serving the world. They provide top-class services, in the friendliest manner, maintaining the highest programming standards.",
      info2:
        "Worked on several freelance projects involving frameworks like Flutter, Native Android and GoFiber.",
    }
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
                  info3={work.info3}
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
