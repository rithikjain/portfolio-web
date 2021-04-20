import Header from "./components/Common/Header";
import PageDescription from "./components/Common/PageDescription";
import Content from "./components/Common/Content";

import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex-col flex h-screen">
        <Header />
        <div className="flex flex-1">
          <PageDescription />
          <Content />

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
