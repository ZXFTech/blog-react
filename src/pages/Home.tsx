import React, { useEffect, useState } from "react";

import BlogSection from "../components/section/BlogSection";
import { Blog } from "../interface/Blog";

import { getBlogList } from "../service/blog";

function Home() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getBlogList().then((res: any) => {
      console.log(res);
      setBlogList(res.data.result);
    });
    return () => {};
  }, []);

  return (
    <div className="home_main">
      {blogList && blogList.length ? (
        blogList.map((item: Blog) => <BlogSection key={item.id} blog={item} />)
      ) : (
        <div>无数据</div>
      )}
    </div>
  );
}

export default Home;
