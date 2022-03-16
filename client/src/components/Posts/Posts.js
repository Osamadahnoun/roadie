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
                <Link to="/profile">
                  <p className="p-3">{post.username}</p>{" "}
                </Link>
                <p className="p-3">{post.createdAt}</p>
              </Card.Header>
              <Link to="/post">
                <Card.Body>
                  <Card.Title className="title">
                    <p>{post.location}</p>
                  </Card.Title>
                  <Card.Text className="text">
                    <p>{post.postText}</p>
                  </Card.Text>
                  <Card.Title className="border-top pt-2 title">
                    <p>Cost of Travel</p>
                  </Card.Title>
                  <Card.Text className="text">
                    <p>{post.cost}</p>
                  </Card.Text>
                  <Card.Title className="border-top pt-2 title">
                    <p>Heritages | Places to Visit | Accessibility</p>
                  </Card.Title>
                  <Card.Text className="text">
                    <p>Heritages: {post.heritages}</p>
                  </Card.Text>
                  <Card.Text className="text">
                    <p>Places to visit: {post.placesToVisit}</p>
                  </Card.Text>
                  <Card.Text className="text">
                    <p>Accessibility: {post.accessibility}</p>
                  </Card.Text>
                  <Card.Title className="border-top pt-2 title">
                    <p>Extra Information</p>
                  </Card.Title>
                  <Card.Text className="text">
                    <p>{post.other}</p>
                  </Card.Text>
                  <Card.Title className="border-top title pt-2 d-flex align-items-center">
                    <p>
                      Comments: {post.commentCount} | Click to view or comment!
                    </p>
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
