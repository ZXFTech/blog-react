import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactMarkdown from "react-markdown";

function Test() {
  const input = "# This is a header\n\nAnd this is a paragraph";
  return (
    <div>
      <ReactMarkdown source={input} />
    </div>
  );
}

export default Test;
