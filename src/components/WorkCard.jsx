import React from "react";

const WorkCard = ({ company, position, duration, info1, info2 }) => {
  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center mb-16">
      <div className="w-7/12 flex flex-col">
        <h1 className="font-bold text-5xl">{company}</h1>
        <p className="ml-2 mt-4 text-lg text-gray-500 font-medium">
          {position}
        </p>
        <p className="ml-2 text-gray-500 font-medium">{duration}</p>
        <ul className="list-disc mt-20 ml-6 text-lg">
          <li>{info1}</li>
          <li className="mt-4">{info2}</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
