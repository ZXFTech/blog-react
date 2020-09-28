import React from "react";

function Frame(props: any) {
  console.log("Frame", props);

  return <div>{props.children}</div>;
}

export default Frame;
