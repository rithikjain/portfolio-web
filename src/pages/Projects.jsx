import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import spike from "../assets/spike.png";
import sociocredz from "../assets/sociocredz.png";
import devtalks from "../assets/devtalks.png";
import qwikscan from "../assets/qwikscan.png";
import easygists from "../assets/easygists.png";
import athena from "../assets/athena.png";
import stylator from "../assets/stylator.png";
import thedolist from "../assets/thedolist.png"
import werk from "../assets/werk.png"
import policewatch from "../assets/policewatch.png"
import yuva from "../assets/yuva.png"
import { motion } from "framer-motion";

const Projects = ({ setPage, pageVariants, pageTransition }) => {
  useEffect(() => {
    setPage(1);
  });

  const projectsList = [
    {
      image: thedolist,
      title: "The Do List",
      description:
        "A simple, minimalistic NO BS to do list widget, written extirely in Jetpack Glance.",
      github: "https://github.com/rithikjain/the-do-list",
      website:
        "https://play.google.com/store/apps/details?id=in.rithikjain.thedolist&pli=1",
    },
    {
      image: yuva,
      title: "Project YUVA",
      description:
        "An app built with Flutter for adolescents to get their queries answered by medical professionals. Built the mobile app and led a team of 4 developers. In collaboration with CMC, CIF and The Hope House.",
      github: "https://github.com/GDGVIT/yuva-app-rewrite",
      website:
        "https://play.google.com/store/apps/details?id=com.dscvit.yuva",
    },
    {
      image: policewatch,
      title: "Manipur Police Watch",
      description:
        "An app built for the Manipur State Police to track locations of all patrolling officers around the patrolling points in real-time. Integrated Google Maps SDK. Implemented a foreground service to track the officer’s location. MVVM architecture with Hilt for DI, and Firebase for Auth.",
      github: "https://github.com/rithikjain/police-watch-app",
      website:
        "-",
    },
    {
      image: werk,
      title: "Werk",
      description:
        "An app to boost your productivity while having fun with your peers! Implemented a foreground service to run multiple timers in parallel. MVVM architecture with Hilt for DI, used Flow across the app",
      github: "https://github.com/rithikjain/werk-app",
      website:
        "https://play.google.com/store/apps/details?id=com.dscvit.werk",
    },
    {
      image: spike,
      title: "Spike",
      description:
        "Spike is a Short Videos App built for artists and creators. Spike uses Spaces to help you find your people that Create and Consume the same content! App is built using Flutter. The backend is written in Go with GoFiber as the server framework.",
      github: "https://github.com/ProjectSpike/spike-app",
      website:
        "https://www.youtube.com/watch?v=aIbzdvnoKqA&ab_channel=RithikJain",
    },
    {
      image: sociocredz,
      title: "SocioCredz",
      description:
        "Have you ever wanted to do something for the social cause but lacked the time and the means to do it? SocioCredz is built to do just that. SocioCredz will help you to provide education, and food, etc to the people in need without you even spending a single penny from your pocket!",
      github: "https://github.com/TeamRekursion/sociocredz-app",
      website: "https://drive.google.com/file/d/1ADXKWPysEPB6LZjiWKGFJSqKI3AAIFFn/view?usp=sharing",
    },
    {
      image: devtalks,
      title: "DevTalks App",
      description:
        "The official app for DevTalks 2020 conducted by DSC-VIT written with Flutter.",
      github: "https://github.com/rithikjain/devstack-app",
      website:
        "https://play.google.com/store/apps/details?id=com.dscvit.devtalks",
    },
    {
      image: stylator,
      title: "Stylator",
      description:
        "This app uses Tensorflow Lite to implement a neural style transfer deep learning model onboard device. You can use this app to apply filters which adapt to the image they have to be apllied on hence giving rise to an artistic photo which is the final product.",
      github: "https://github.com/rithikjain/neural-style-tflite",
      website:
        "https://play.google.com/store/apps/details?id=com.rithikjain.neuralstyletransfer",
    },
    {
      image: qwikscan,
      title: "QwikScan",
      description:
        "A problem we found with the system here in India is that even though people sometimes follow social distancing, but in long queues, lack of patience gets the best of us. Thus, we rarely see people following social distancing on cash counters. This app allows the users to self checkout their cart.",
      github: "https://github.com/BRO3886/qwikscan",
      website:
        "https://www.youtube.com/watch?v=CCXDGFrspcs&ab_channel=SiddharthaVarma",
    },
    {
      image: easygists,
      title: "Easy Gists",
      description:
        "An unofficial mobile client to create, update, delete and view GitHub Gists. The app is written in Kotlin with following the MVVM architecture and uses the Jetpack components.",
      github: "https://github.com/rithikjain/Gists-App",
      website: "https://youtu.be/HLjTgNuyEyg",
    },
    {
      image: athena,
      title: "Athena",
      description:
        "A period tracking app with an added functionality to communicate with others also on period in the vicinity and ask for help.",
      github: "https://github.com/rithikjain/Athena-Periods-Helper",
      website:
        "https://drive.google.com/file/d/1jBxwJ4FDmyffZugdyiQBTVStJu7jwbdv/view?usp=sharing",
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

        {projectsList.map((project, index) => {
          return (
            <div
              key={index}
              className={
                index === currentPage ? "card active w-full h-full" : "card"
              }
            >
              {index === currentPage && (
                <ProjectCard
                  img={project.image}
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  website={project.website}
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

export default Projects;
