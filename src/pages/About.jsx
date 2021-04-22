import React from "react";
import phone from "../assets/phone.png";

const About = () => {
  return (
    <div className="h-full flex">
      <div className="flex-1 flex items-center justify-center">
        <div className="ml-32 mb-24 w-2/3">
          <h1 className="text-8xl font-bold tracking-wide">Hello</h1>
          <div className="bg-black h-1 w-24 ml-2 mt-2"></div>
          <p className="ml-2 mt-16 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="h-full flex-1">
        <div className="flex h-full items-center justify-center">
          <img src={phone} alt="PhoneImage" width="40%" />
        </div>
      </div>
    </div>
  );
};

export default About;
