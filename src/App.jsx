import Header from "./components/Header";
import PageDescription from "./components/PageDescription";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Tech from "./pages/Tech";
import { AnimatePresence } from "framer-motion";

import { Link, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [pageNo, setPageNo] = useState(0);

  const selectedCSS = "my-4 font-extrabold mx-4 cursor-default";
  const deSelectedCSS =
    "my-4 mx-4 text-xs font-bold text-gray-400 transition duration-300 ease-in-out transform hover:text-gray-700";

  const pagesTitle = ["ABOUT ME", "PROJECTS", "WORK", "TECH STACK"];

  const pageVariants = {
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: "-100vh",
      scale: 0.5,
    },
  };

  const pageTransition = {
    type: "spring",
    velocity: 0.1,
    damping: 12,
  };

  return (
    <div className="flex-col flex h-screen">
      <Header />
      <div className="flex h-screen main">
        <PageDescription
          key={pageNo}
          pageNo={"0" + (pageNo + 1)}
          pageTitle={pagesTitle[pageNo]}
        />

        {/* Pages */}
        <div className="flex-1">
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/projects">
                <Projects
                  setPage={setPageNo}
                  pageVariants={pageVariants}
                  pageTransition={pageTransition}
                />
              </Route>
              <Route path="/work">
                <Work
                  setPage={setPageNo}
                  pageVariants={pageVariants}
                  pageTransition={pageTransition}
                />
              </Route>
              <Route path="/tech">
                <Tech
                  setPage={setPageNo}
                  pageVariants={pageVariants}
                  pageTransition={pageTransition}
                />
              </Route>
              <Route path="/">
                <About
                  setPage={setPageNo}
                  pageVariants={pageVariants}
                  pageTransition={pageTransition}
                />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>

        {/* Page Selector */}
        <div className="w-40 hidden sm:flex flex-col justify-center mb-16">
          <div className="flex flex-col">
            <div className={pageNo === 0 ? selectedCSS : deSelectedCSS}>
              <Link
                to="/"
                className={pageNo === 0 ? "cursor-default" : ""}
                onClick={() => setPageNo(0)}
              >
                <span className="tracking-wide">ABOUT</span>
              </Link>
            </div>
            <div className={pageNo === 1 ? selectedCSS : deSelectedCSS}>
              <Link
                to="/projects"
                className={pageNo === 1 ? "cursor-default" : ""}
                onClick={() => setPageNo(1)}
              >
                <span className="tracking-wide">PROJECTS</span>
              </Link>
            </div>
            <div className={pageNo === 2 ? selectedCSS : deSelectedCSS}>
              <Link
                to="/work"
                className={pageNo === 2 ? "cursor-default" : ""}
                onClick={() => setPageNo(2)}
              >
                <span className="tracking-wide">WORK</span>
              </Link>
            </div>
            <div className={pageNo === 3 ? selectedCSS : deSelectedCSS}>
              <Link
                to="/tech"
                className={pageNo === 3 ? "cursor-default" : ""}
                onClick={() => setPageNo(3)}
              >
                <span className="tracking-wide">TECH</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
