import React, { useState } from "react";

import { testComments, IComment } from "../../dataStructure/comment";
import userIcon from "../../assets/icon/akari.jpg";
import CommentInput from "./CommentInput";

function Comment(props: any) {
  const [commentList, setCommentList] = useState<IComment[]>(testComments);

  return (
    <div className="comment_main">
      <CommentInput />
      {commentList.map((item: IComment) => {
        return (
          <div className="comment_comment" key={item.id}>
            <img className="comment_user-icon" src={userIcon} />
            <div className="comment_content">
              <div className="comment_detail">
                <span className="comment_user-name">{item.name}</span>
                <span className="comment_date">{item.date}</span>
              </div>
              {item.content}
            </div>
            {item.reply && item.reply.length ? (
              item.reply.map((item: IComment) => {
                return (
                  <div className="comment_comment_reply">
                    <div className="comment_detail">
                      <img className="comment_user-icon" src={userIcon} />
                      <span className="comment_user-name">{item.name}</span>
                      <span className="comment_date">{item.date}</span>
                    </div>
                    <div className="comment_content">{item.content}</div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
