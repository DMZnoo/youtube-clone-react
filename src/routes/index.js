import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Watch from "../components/Watch";
import "../styles/index.css";
export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path={"/watch"} component={Watch} />
    </Switch>
  </Router>
);
