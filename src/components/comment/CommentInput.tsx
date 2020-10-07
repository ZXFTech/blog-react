import React from "react";

function CommentInput() {
  const sendComment = () => {};
  const handleChange = () => {};

  return (
    <div className="comment_input">
      <input type="text" onChange={handleChange} />
      <button onClick={sendComment}>回复</button>
    </div>
  );
}

export default CommentInput;
