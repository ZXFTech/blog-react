import React from "react";

function Test(props: any) {
  console.log("Test", props);

  return <div>Hi,im {props.name}</div>;
}

export default Test;
