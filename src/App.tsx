import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import "./themes/normal.scss";
import "./themes/neumorphism.scss";

import Test from "./components/Test";
import Frame from "./components/Frame";

import ButtonItem, { ButtonList } from "./dataStructure/button";
import Button from "./components/Button";

function App() {
  const onButtonClick = (text: string) => {
    console.log(text);
  };
  return (
    <div className="App">
      {ButtonList.map((item: ButtonItem) => {
        item.onClick = () => {
          onButtonClick(item.text);
        };
        return <Button key={item.name} {...item} className={item.className} />;
      })}
    </div>
  );
}

export default App;
