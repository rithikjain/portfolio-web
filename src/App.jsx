import Header from "./components/Header";
import PageDescription from "./components/PageDescription";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Tech from "./pages/Tech";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [pageNo, setPageNo] = useState(0);

  const selectedCSS = "bg-black w-9 h-1 my-4 mx-4";
  const deSelectedCSS = "bg-gray-400 w-5 h-0.5 my-4 mx-4";

  const pagesTitle = ["ABOUT ME", "PROJECTS", "WORK", "TECH STACK"];

  return (
    <Router>
      <div className="flex-col flex h-screen">
        <Header />
        <div className="flex h-screen main">
          <PageDescription
            pageNo={"0" + (pageNo + 1)}
            pageTitle={pagesTitle[pageNo]}
          />

          {/* Pages */}
          <div className="flex-1">
            <Switch>
              <Route path="/projects">
                <Projects setPage={setPageNo} />
              </Route>
              <Route path="/work">
                <Work setPage={setPageNo} />
              </Route>
              <Route path="/tech">
                <Tech setPage={setPageNo} />
              </Route>
              <Route path="/">
                <About setPage={setPageNo} />
              </Route>
            </Switch>
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
    </Router>
  );
}

export default App;
