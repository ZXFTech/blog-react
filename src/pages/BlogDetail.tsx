import React, { useEffect, useState } from "react";

import { Blog } from "../interface/Blog";

import { getBlogDetail } from "../service/blog";

import { Share, shares } from "../dataStructure/shares";

function BlogDetail(props: any) {
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    console.log(props.match.params);
    getBlogDetail(props.match.params.id)
      .then((res: any) => {
        console.log(res.data);

        setBlog(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
  if (blog !== undefined) {
    return (
      <div className="blog-page_main">
        <div className="blog-page_title">{blog.title}</div>
        <div className="blog-page_details">
          <span className="blog-page_author">{blog.author}</span>
          <span className="blog-page_createDate">{blog.date}</span>
          <span className="blog-page_updateDate">
            最后更新于 {blog.updateDate}
          </span>
        </div>
        <div className="blog-page_content">{blog.content}</div>
        <div className="blog-page_shares">
          分享：
          {/* <a className="facebook" href="#">
            <span className="fa fa-facebook-f"></span>
          </a>
          <a className="qq" href="#">
            <span className="fa fa-qq"></span>
          </a>
          <a className="weixin" href="#">
            <span className="fa fa-weixin"></span>
          </a> */}
          {shares.map((item: Share) => {
            return (
              <a className="share_main" href={item.url}>
                {item.icon()}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
  return <div>博客不存在</div>;
}

export default BlogDetail;
