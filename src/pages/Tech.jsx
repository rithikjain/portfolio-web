import React, { useEffect } from "react";
import { AiFillAndroid } from "react-icons/ai";
import { RiFlutterFill } from "react-icons/ri";
import { SiKotlin } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import GoLang from "../assets/golang.svg";
import { motion } from "framer-motion";

const Tech = ({ setPage, pageVariants, pageTransition }) => {
  useEffect(() => {
    setPage(3);
  });

  return (
    <motion.div
      className="h-full flex items-center justify-center"
      exit="out"
      initial="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="w-8/12 gap-y-10 gap-x-16 lg:gap-y-20 grid grid-cols-3 grid-rows-2 items-center">
        {/* Android */}
        <div className="inline-flex flex-col items-center">
          <div className="bg-black w-20 h-20 lg:w-36 lg:h-36 rounded-full flex items-center justify-center">
            <AiFillAndroid color="white" size="70%" />
          </div>
          <span className="font-bold text-sm sm:text-base mt-2">Android</span>
        </div>

        {/* Flutter */}
        <div className="inline-flex flex-col items-center">
          <div className="bg-black w-20 h-20 lg:w-36 lg:h-36 rounded-full flex items-center justify-center">
            <RiFlutterFill color="white" size="70%" className="mr-2" />
          </div>
          <span className="font-bold text-sm sm:text-base mt-2">Flutter</span>
        </div>

        {/* GoLang */}
        <div className="inline-flex flex-col items-center">
          <div className="bg-black w-20 h-20 lg:w-36 lg:h-36 rounded-full flex items-center justify-center">
            <img src={GoLang} alt="GoLang" width="55%" />
          </div>
          <span className="font-bold text-sm sm:text-base mt-2">GoLang</span>
        </div>

        {/* Kotlin */}
        <div className="inline-flex flex-col items-center">
          <div className="bg-black w-20 h-20 lg:w-36 lg:h-36 rounded-full flex items-center justify-center">
            <SiKotlin color="white" size="45%" />
          </div>
          <span className="font-bold text-sm sm:text-base mt-2">Kotlin</span>
        </div>

        {/* NodeJS */}
        <div className="inline-flex flex-col items-center">
          <div className="bg-black w-20 h-20 lg:w-36 lg:h-36 rounded-full flex items-center justify-center">
            <FaNodeJs color="white" size="70%" />
          </div>
          <span className="font-bold text-sm sm:text-base mt-2">NodeJS</span>
        </div>

        {/* React */}
        <div className="inline-flex flex-col items-center">
          <div className="bg-black w-20 h-20 lg:w-36 lg:h-36 rounded-full flex items-center justify-center">
            <FaReact color="white" size="70%" />
          </div>
          <span className="font-bold text-sm sm:text-base mt-2">React</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Tech;
