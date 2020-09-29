import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import "./themes/neumorphism.scss";

import Frame from "./components/Frame";

function App() {
  return (
    <div className="App">
      <Frame>
        <p>我是内容~</p>
      </Frame>
    </div>
  );
}

export default App;
