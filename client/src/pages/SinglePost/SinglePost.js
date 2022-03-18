import React from "react";
import Comment from "../../components/Comment/Comment";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "../../utils/queries";
import CommentList from "../../components/CommentList/CommentList";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
const SinglePost = () => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <div className="container d-flex justify-content-center m-5">
        <Card className="col-10 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <Card.Header className="d-flex justify-content-between header flex-wrap">
            <Link to={`/profile/${post.username}`}>
              <p className="p-3">{post.username}</p>
            </Link>{" "}
            <p className="p-3">{post.createdAt}</p>
          </Card.Header>
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
          </Card.Body>
        </Card>
      </div>
      <div className="container d-flex justify-content-center">
        {Auth.loggedIn() && <Comment postId={post._id} />}
      </div>
      {post.commentCount > 0 && <CommentList comments={post.comments} />}
    </div>
  );
};

export default SinglePost;
