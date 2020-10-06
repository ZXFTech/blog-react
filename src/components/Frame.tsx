import React from "react";

import Content from "./content/Content";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

function Frame(props: any) {
  return (
    <div className="frame">
      <Header />

      <Content>{props.children}</Content>

      <Footer />
    </div>
  );
}

export default Frame;
