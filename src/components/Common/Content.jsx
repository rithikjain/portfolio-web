import React from "react";
import About from "../About";
import Projects from "../Projects";
import Work from "../Work";
import Tech from "../Tech";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const Content = () => {
  return (
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
  );
};

export default Content;
