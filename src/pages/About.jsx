import React, { useEffect } from "react";
import phone from "../assets/phone.png";
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
          <h1 className="text-5xl sm:text-8xl font-bold tracking-wide">Hello</h1>
          <div className="bg-black h-1 w-12 ml-1 sm:w-24 sm:ml-2 mt-2"></div>
          <p className="sm:ml-2 mt-8 sm:mt-16 sxm:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
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
