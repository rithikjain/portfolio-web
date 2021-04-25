import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ showMenu, setShowMenu, pageNo, setPageNo }) => {
  const selectedCSS = "my-4 font-extrabold mx-4 cursor-default";
  const deSelectedCSS =
    "my-4 mx-4 text-xs font-bold text-gray-400 transition duration-300 ease-in-out transform hover:text-gray-700";

  return (
    <div
      className={
        showMenu
          ? "bg-white z-10 flex flex-col w-36 items-center shadow-lg absolute right-0 md:hidden p-3"
          : "hidden"
      }
    >
      <div className={pageNo === 0 ? selectedCSS : deSelectedCSS}>
        <Link
          to="/"
          className={pageNo === 0 ? "cursor-default" : ""}
          onClick={() => {
            setPageNo(0);
            setShowMenu(false);
          }}
        >
          <span className="tracking-wide">ABOUT</span>
        </Link>
      </div>
      <div className={pageNo === 1 ? selectedCSS : deSelectedCSS}>
        <Link
          to="/projects"
          className={pageNo === 1 ? "cursor-default" : ""}
          onClick={() => {
            setPageNo(1);
            setShowMenu(false);
          }}
        >
          <span className="tracking-wide">PROJECTS</span>
        </Link>
      </div>
      <div className={pageNo === 2 ? selectedCSS : deSelectedCSS}>
        <Link
          to="/work"
          className={pageNo === 2 ? "cursor-default" : ""}
          onClick={() => {
            setPageNo(2);
            setShowMenu(false);
          }}
        >
          <span className="tracking-wide">WORK</span>
        </Link>
      </div>
      <div className={pageNo === 3 ? selectedCSS : deSelectedCSS}>
        <Link
          to="/tech"
          className={pageNo === 3 ? "cursor-default" : ""}
          onClick={() => {
            setPageNo(3);
            setShowMenu(false);
          }}
        >
          <span className="tracking-wide">TECH</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
