import BlogDetail from "../pages/BlogDetail";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Introduce from "../pages/Introduce";
import PageNotFound from "../pages/PageNotFound";
import Test from "../pages/Test";

export interface XRoute {
  name: string;
  path: string;
  text: string;
  component: any;
  isNav: boolean;
}

export const navRoute: Array<XRoute> = [
  {
    name: "Home",
    path: "/home",
    text: "首页",
    component: Home,
    isNav: true,
  },
  {
    name: "blogs",
    path: "/blogs",
    text: "博客",
    component: Blogs,
    isNav: true,
  },
  {
    name: "introduce",
    path: "/introduce",
    text: "个人介绍",
    component: Introduce,
    isNav: true,
  },
  {
    name: "blogDetail",
    path: "/blogDetail/:id",
    text: "博客详情",
    component: BlogDetail,
    isNav: false,
  },
  {
    name: "test",
    path: "/test",
    text: "测试",
    component: Test,
    isNav: false,
  },
  {
    name: "404",
    path: "/404",
    text: "404",
    component: PageNotFound,
    isNav: false,
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
