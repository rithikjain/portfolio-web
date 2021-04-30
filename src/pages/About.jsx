import React, { useEffect } from "react";
import phone from "../assets/phone.png";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

const About = ({ setPage, pageVariants, pageTransition }) => {
  useEffect(() => {
    setPage(0);
  });

  return (
    <motion.div
      className="h-full flex"
      exit="out"
      initial="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="ml-0 xl:ml-32 mb-24 w-2/3">
          <h1 className="text-4xl mt-12 sm:text-8xl font-bold tracking-wide">
            Hello
          </h1>
          <div className="bg-black h-1 w-12 ml-1 sm:w-24 sm:ml-2 mt-2"></div>
          <p className="sm:ml-1 text-base mt-6 sm:mt-12 sm:text-lg">
            I'm Rithik. <b className="font-medium">I'm a fullstack developer</b>{" "}
            with over 2+ years of experiences in a wide range of technologies.
            I'm proficient in App development using{" "}
            <b className="font-medium">Kotlin, Flutter</b> and Backend
            development using <b className="font-medium">Go, Node.</b> Also
            really passionate about{" "}
            <b className="font-medium">entrepreneurship </b>
            and currently working on my startup:{" "}
            <b className="font-medium">Spike</b> - Best Community App for
            Musicians.
          </p>
          <p className="sm:ml-1 text-base mt-4 sm:text-lg">
            Fun Fact: I'm a <b className="font-medium">Beatboxer</b> too!
          </p>
          <div className="mt-8">
            <a href={resume} download className="font-bold sm:ml-1 sm:text-lg">
              My Resume (pdf)
            </a>
          </div>
        </div>
      </div>
      <div className="h-full flex-1 hidden xl:flex">
        <div className="flex h-full items-center justify-center">
          <img src={phone} alt="PhoneImage" width="50%" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
