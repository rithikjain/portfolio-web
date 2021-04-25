import React from "react";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import telegram from "../assets/telegram.svg";
import github from "../assets/github.svg";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-11/12 mx-auto py-8">
        <h1 className="text-lg sm:text-2xl font-semibold tracking-wider">
          RITHIK JAIN
        </h1>
        <div className="flex space-x-4 sm:space-x-8 items-center">
          <a href="mailto:rithik.jain3006@gmail.com">
            <img src={email} alt="Email" className="w-5 sm:w-6" />
          </a>
          <a
            href="https://t.me/rithikj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="Telegram" className="w-5 sm:w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rithik-jain-710b3a199/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="w-5 sm:w-6" />
          </a>
          <a
            href="https://www.github.com/rithikjain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className="w-5 sm:w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
