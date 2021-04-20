import React from "react";

const PageDescription = ( {pageNo, pageTitle} ) => {
  return (
    <div className="w-44 flex flex-col justify-center items-center">
      <span className="font-serif font-bold text-7xl">{pageNo}</span>
      <div className="bg-black w-1 h-32 my-8"></div>
      <p className="font-bold transform -rotate-90 my-8">{pageTitle}</p>
    </div>
  );
};

export default PageDescription;
