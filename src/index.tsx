import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./themes/neumorphism.scss";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Frame from "./components/Frame";

import { navRoute } from "./routes/index";

ReactDOM.render(
  <Router>
    <Frame>
      <Switch>
        {navRoute.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
        <Redirect from="/" to="/home" />
        <Redirect to="/404" />
      </Switch>
    </Frame>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
