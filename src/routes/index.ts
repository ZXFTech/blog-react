import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Introduce from "../pages/Introduce";

export interface XRoute {
  name: string;
  path: string;
  text: string;
  component: any;
}

export const navRoute: Array<XRoute> = [
  {
    name: "Home",
    path: "/home",
    text: "首页",
    component: Home,
  },
  {
    name: "blogs",
    path: "/blogs",
    text: "博客",
    component: Blogs,
  },
  {
    name: "introduce",
    path: "/introduce",
    text: "个人介绍",
    component: Introduce,
  },
];

// const routes: Array<XRoute> = [
//   {
//     name: "blogArticle",
//     path: "/blog/:id",
//     text: "文章详情",
//   },
//   {
//     name: "user",
//     path: "/user",
//     text: "用户页",
//   },
// ];
