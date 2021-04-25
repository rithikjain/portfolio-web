import React from "react";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import telegram from "../assets/telegram.svg";
import github from "../assets/github.svg";
import Navigation from "../components/Navigation";
import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

const Header = ({ pageNo, setPageNo }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between w-11/12 mx-auto py-8">
        <div>
          <h1 className="text-lg hidden sm:flex sm:text-2xl font-semibold tracking-wider">
            RITHIK JAIN
          </h1>
          <h1 className="text-lg sm:hidden sm:text-2xl font-semibold tracking-wider">
            RITHIK
          </h1>
        </div>
        <div className="flex space-x-14 justify-end items-center">
          <div className="flex space-x-4 sm:space-x-8 items-center">
            <a href="mailto:rithik.jain3006@gmail.com">
              <img src={email} alt="Email" className="w-4 sm:w-6" />
            </a>
            <a
              href="https://t.me/rithikj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegram} alt="Telegram" className="w-4 sm:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rithik-jain-710b3a199/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="w-4 sm:w-6" />
            </a>
            <a
              href="https://www.github.com/rithikjain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" className="w-4 sm:w-6" />
            </a>
          </div>
          <HamburgerMenu
            width={20}
            height={12}
            animationDuration={0.3}
            isOpen={showMenu}
            menuClicked={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
      <Navigation
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        pageNo={pageNo}
        setPageNo={setPageNo}
      />
    </div>
  );
};

export default Header;
