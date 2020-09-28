import React from "react";

function Button(props: {
  name: string;
  text: string;
  size: string;
  className: string;
  theme?: string;
  onClick?: any;
}) {
  return (
    <button
      className={`${props.className}-${props.size} ${props.theme}-${props.className}-${props.name}`}
      onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
