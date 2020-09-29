import React from "react";

import Navbar from "../navbar/Navbar";
import Icon from "../icon/Icon";
import UserBar from "../userBar/UserBar";

function Header() {
  return (
    <div>
      <Icon />
      <Navbar />
      <UserBar />
    </div>
  );
}

export default Header;
