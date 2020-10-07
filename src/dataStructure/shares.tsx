import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

export const shares: Share[] = [
  {
    plat: "github",
    url: "github.com",
    icon: () => <FontAwesomeIcon className="share_icon" icon={faGithub} />,
  },
  {
    plat: "github",
    url: "github.com",
    icon: () => <FontAwesomeIcon className="share_icon" icon={faGithub} />,
  },
];

export interface Share {
  plat: string;
  url: string;
  icon: any;
}
