import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CommentList = ({ comments }) => {
  return (
    <div className="container d-flex justify-content-center m-5">
      <Card className="col-10 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <Card.Header className="header">
          <p className="p-3">Comments</p>{" "}
        </Card.Header>
        <Card.Body>
          {comments &&
            comments.map((comment) => (
              <Card.Text
                className="text border-bottom p-4 pb-5 m-3 d-flex flex-column"
                key={comment._id}
              >
                <p>{comment.commentBody}</p>
                <Link to={`/profile/${comment.username}`}>
                  <p className="fw-bold mt-3">
                    {comment.username} on {comment.createdAt}
                  </p>
                </Link>
              </Card.Text>
            ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CommentList;
