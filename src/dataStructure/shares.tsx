import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

export const shares: Share[] = [
  {
    plat: "youtube",
    url: "https://www.youtube.com/",
    icon: () => (
      <FontAwesomeIcon className="share_icon" icon={faYoutubeSquare} />
    ),
  },
  {
    plat: "github",
    url: "https://github.com",
    icon: () => <FontAwesomeIcon className="share_icon" icon={faGithub} />,
  },
];

export interface Share {
  plat: string;
  url: string;
  icon: any;
}
