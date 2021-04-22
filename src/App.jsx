import Header from "./components/Header";
import PageDescription from "./components/PageDescription";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Tech from "./pages/Tech";
import { AnimatePresence } from "framer-motion";

import { Link, Switch, Route, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const [pageNo, setPageNo] = useState(0);

  const selectedCSS = "bg-black w-9 h-1 my-4 mx-4";
  const deSelectedCSS = "bg-gray-400 w-5 h-0.5 my-4 mx-4";

  const pagesTitle = ["ABOUT ME", "PROJECTS", "WORK", "TECH STACK"];

  const location = useLocation();

  const pageVariants = {
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: "-100vh",
      scale: 0.8,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
  };

  return (
    <div className="flex-col flex h-screen">
      <Header />
      <div className="flex h-screen main">
        <PageDescription
          pageNo={"0" + (pageNo + 1)}
          pageTitle={pagesTitle[pageNo]}
        />

        {/* Pages */}
        <div className="flex-1">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
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
        <div className="w-44 flex flex-col justify-center items-center mb-16">
          <div className="flex flex-col">
            <div className={pageNo === 0 ? selectedCSS : deSelectedCSS}>
              <Link to="/">
                <div className="w-full h-2"></div>
              </Link>
            </div>
            <div className={pageNo === 1 ? selectedCSS : deSelectedCSS}>
              <Link to="/projects">
                <div className="w-full h-2"></div>
              </Link>
            </div>
            <div className={pageNo === 2 ? selectedCSS : deSelectedCSS}>
              <Link to="/work">
                <div className="w-full h-2"></div>
              </Link>
            </div>
            <div className={pageNo === 3 ? selectedCSS : deSelectedCSS}>
              <Link to="/tech">
                <div className="w-full h-2"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
