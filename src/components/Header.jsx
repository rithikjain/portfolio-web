import React from "react";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import telegram from "../assets/telegram.svg";
import github from "../assets/github.svg";
import menu from "../assets/menu.svg";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-11/12 mx-auto py-8">
        <h1 className="text-2xl font-semibold tracking-wider">RITHIK JAIN</h1>

        <div className="flex space-x-28">
          <div className="flex space-x-8">
            <a href="mailto:rithik.jain3006@gmail.com">
              <img src={email} alt="Email" height="25px" width="25px" />
            </a>
            <a href="https://t.me/rithikj">
              <img src={telegram} alt="Telegram" height="25px" width="25px" />
            </a>
            <a href="https://www.linkedin.com/in/rithik-jain-710b3a199/">
              <img src={linkedin} alt="LinkedIn" height="25px" width="25px" />
            </a>
            <a href="https://www.github.com/rithikjain">
              <img src={github} alt="GitHub" height="25px" width="25px" />
            </a>
          </div>

          <img src={menu} alt="Menu" width="30px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
