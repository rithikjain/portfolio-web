import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Work = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-3/4 w-10/12 flex items-center">
        <IoIosArrowBack size="50" className="cursor-pointer" />
        <div className="flex-1 h-full flex flex-col items-center justify-center mb-16">
          <div className="w-7/12 flex flex-col">
            <h1 className="font-bold text-5xl">Winuall</h1>
            <p className="ml-2 mt-4 text-lg text-gray-500 font-medium">
              Android Developer Intern
            </p>
            <p className="ml-2 text-gray-500 font-medium">
              Jul 2020 - Aug 2020
            </p>
            <ul className="list-disc mt-20 ml-6 text-lg">
              <li>
                Winuall is a startup based out of Bangalore. It specialises in
                helping coaching centers go digital.
              </li>
              <li className="mt-4">
                Worked on some Android thing and blah blah blah was fun and
                learnt a lot!
              </li>
            </ul>
          </div>
        </div>
        <IoIosArrowForward size="50" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Work;
