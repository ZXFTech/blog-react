import React, { useEffect, useState } from "react";
import { getBlogList } from "../service/blog";

function Blogs() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getBlogList().then((res: any) => {
      console.log(res);
      setBlogList(res.data.result);
    });
    return () => {};
  }, []);

  return (
    <div>
      <h2>博客列表</h2>
    </div>
  );
}

export default Blogs;
