import React from "react";
import Sidebar from "../sidebar/Sidebar";

function Content(props: any) {
  return (
    <div className="content_main">
      {/* <Sidebar side="left-side" /> */}
      <div className="content_content_main">
        {props.children ? props.children : <h1>内容区域</h1>}
      </div>
      <Sidebar side="right-side" />
    </div>
  );
}

export default Content;
