import React from "react";
import { Link } from "react-router-dom";

import { XRoute } from "../../routes";

function Navbar({ nav }: any) {
  return (
    <div className="navbar_main">
      {nav.map((item: XRoute) => {
        return (
          <Link key={item.path} className="navbar_item" to={item.path}>
            {item.text}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
