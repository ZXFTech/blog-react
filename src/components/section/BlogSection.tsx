import { faComments } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendar,
  faCalendarAlt,
  faComment,
  faCommentAlt,
  faCommentDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon/akari.jpg";
import blogImg from "../../assets/img/blog/blog-img.jpg";

function BlogSection({ blog }: any) {
  return (
    <div className="blog_section_main">
      <div className="blog_section_img">
        <img src={blogImg} alt="blog image snap" className="blog_section_img" />
      </div>
      <div className="blog_section_content">
        <Link className="blog_section_title" to={`/blogDetail/${blog._id}`}>
          {blog.title}
        </Link>
        <p>{blog.content}</p>
        <div className="blog_section_details">
          <span className="blog_section_details_date">
            <FontAwesomeIcon icon={faCalendarAlt} />
            {blog.date}
          </span>
          <a href="#">
            <FontAwesomeIcon icon={faComments} />
            {!blog.comments ? 0 : blog.comments.length}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
