import React from "react";

function Content(props: any) {
  return <div>{props.children ? props.children : <h1>内容区域</h1>}</div>;
}

export default Content;
