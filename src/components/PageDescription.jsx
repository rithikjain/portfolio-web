import React from "react";
import { motion } from "framer-motion";

const PageDescription = ({ pageNo, pageTitle }) => {
  return (
    <motion.div
      className="w-44 flex flex-col justify-center items-center mb-8"
      initial={{ opacity: 0, y: "-100vh", scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "tween", ease: "anticipate", duration: 1 }}
    >
      <span className="font-serif font-bold text-7xl">{pageNo}</span>
      <div className="bg-black w-1 h-32 my-12"></div>
      <p className="font-bold transform -rotate-90 my-8">{pageTitle}</p>
    </motion.div>
  );
};

export default PageDescription;
