import React from "react";

import Navbar from "../navbar/Navbar";
import Icon from "../icon/Icon";

import { navRoute } from "../../routes/index";

const nav = navRoute.filter((item) => {
  return item.isNav;
});

function Header() {
  return (
    <div className="header_main">
      <Icon />
      <Navbar nav={nav} />
      {/* <UserBar /> */}
    </div>
  );
}

export default Header;
