import React from "react";

const WorkCard = ({ company, position, duration, info1, info2, info3 }) => {
  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center mb-16">
      <div className="w-11/12 xl:w-7/12 flex flex-col">
        <h1 className="font-bold text-3xl md:text-4xl">{company}</h1>
        <p className="ml-2 mt-4 text-sm md:text-lg text-gray-500 font-medium">
          {position}
        </p>
        <p className="ml-2 text-sm md:text-lg text-gray-500 font-medium">{duration}</p>
        <ul className="list-disc mt-10 ml-6 text-lg">
          <li className="text-sm md:text-base">{info1}</li>
          <li className="mt-4 text-sm md:text-base">{info2}</li>
          {info3 && <li className="mt-4 text-sm md:text-base">{info3}</li>}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
