import Header from "./components/Common/Header";
import PageDescription from "./components/Common/PageDescription";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Tech from "./pages/Tech";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex-col flex h-screen">
        <Header />
        <div className="flex flex-1">
          <PageDescription />

          {/* Pages */}
          <div className="flex-1">
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
              <Route path="/tech">
                <Tech />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </div>

          {/* Page Selector */}
          <div className="w-28 flex flex-col justify-center">
            <div className="bg-black w-9 h-1 my-4 mx-4">
              <Link to="/">
                <div className="w-9 h-2"></div>
              </Link>
            </div>
            <div className="bg-gray-400 w-5 h-0.5 my-4 mx-4">
              <Link to="/projects">
                <div className="w-5 h-2"></div>
              </Link>
            </div>
            <div className="bg-gray-400 w-5 h-0.5 my-4 mx-4">
              <Link to="/work">
                <div className="w-5 h-2"></div>
              </Link>
            </div>
            <div className="bg-gray-400 w-5 h-0.5 my-4 mx-4">
              <Link to="/tech">
                <div className="w-5 h-2"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
