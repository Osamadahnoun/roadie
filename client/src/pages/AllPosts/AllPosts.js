import React from "react";
import Posts from "../../components/Posts/Posts";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../utils/queries";
import AddPostModal from "../../components/AddPostModal/AddPostModal";

const Allposts = () => {
  const { loading, data } = useQuery(GET_ALL_POSTS);

  const posts = data?.posts || [];
  return (
    <div className="container d-flex flex-column justify-content-center">
      <h2 className="m-5 home-title">Travel Logs</h2>
      <AddPostModal>
        <p>Add a Post</p>
      </AddPostModal>
      {loading ? <div>Loading...</div> : <Posts posts={posts} />}
    </div>
  );
};

export default Allposts;
