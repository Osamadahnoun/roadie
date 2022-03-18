import React from "react";
import "./Posts.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <div className="d-flex flex-column align-items-center w-100">
      {posts &&
        posts.map((post) => (
          <div
            className="container d-flex justify-content-center m-5"
            key={post._id}
          >
            <Card className="col-10 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <Card.Header className="d-flex justify-content-between header flex-wrap">
                <Link to="/profile">{post.username}</Link>
                {post.createdAt}
              </Card.Header>
              <Link to={`/post/${post._id}`}>
                <Card.Body>
                  <Card.Title className="title">{post.location}</Card.Title>
                  <Card.Text className="text">{post.postText}</Card.Text>
                  <Card.Title className="border-top pt-2 title">
                    Cost of Travel
                  </Card.Title>
                  <Card.Text className="text">{post.cost}</Card.Text>
                  <Card.Title className="border-top pt-2 title">
                    Heritages | Places to Visit | Accessibility
                  </Card.Title>
                  <Card.Text className="text">
                    Heritages: {post.heritages}
                  </Card.Text>
                  <Card.Text className="text">
                    Places to visit: {post.placesToVisit}
                  </Card.Text>
                  <Card.Text className="text">
                    Accessibility: {post.accessibility}
                  </Card.Text>
                  <Card.Title className="border-top pt-2 title">
                    Extra Information
                  </Card.Title>
                  <Card.Text className="text">{post.other}</Card.Text>
                  <Card.Title className="border-top title pt-2 d-flex align-items-center">
                    Comments: {post.commentCount} | Click to view or comment!
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default Posts;
