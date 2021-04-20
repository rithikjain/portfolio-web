import Header from './components/Common/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex-col flex h-screen">
        <Header />
        <div className="flex flex-1">
          {/* Page Description */}
          <div className="w-56 flex flex-col justify-center items-center">
            <span className="font-serif font-bold text-7xl">01</span>
            <div className="bg-black w-1 h-32 my-8"></div>
            <p className="font-bold transform -rotate-90 my-8">ABOUT ME</p>
          </div>

          {/* Content */}
          <div className="flex-1"></div>

          {/* Page Selector */}
          <div className="w-28 flex flex-col justify-center">
            <div className="bg-black w-9 h-1 my-4 mx-4"></div>
            <div className="bg-gray-600 w-5 h-0.5 my-4 mx-4"></div>
            <div className="bg-gray-600 w-5 h-0.5 my-4 mx-4"></div>
            <div className="bg-gray-600 w-5 h-0.5 my-4 mx-4"></div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
