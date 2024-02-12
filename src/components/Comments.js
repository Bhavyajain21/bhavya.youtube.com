import React from "react";
import { CgProfile } from "react-icons/cg";

const Comments = ({ comments }) => {
  return (
    <div className="mt-4 ml-4">
      {comments.map((comment) => {
        console.log(comment);
        return (
          <div className="mb-4">
            <div className="name flex items-center border-l-2 ml-4 border-black">
              <CgProfile className="text-4xl ml-2" />{" "}
              <span className="ml-4">
                <div className="name font-semibold">{comment.name}</div>
                <div className="comment text-sm">{comment.comment}</div>
              </span>
            </div>
            <div className="replies">
              {comment.replies.size != 0 ? (
                <Comments comments={comment.replies} />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
