import React from "react";
import Posts from "../../components/Posts/Posts";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../utils/queries";
import AddPostModal from "../../components/AddPostModal/AddPostModal";
import './AllPosts.css';

const Allposts = () => {
  const { loading, data } = useQuery(GET_ALL_POSTS);

  const posts = data?.posts || [];
  return (
    <div className="container d-flex flex-column justify-content-center">
      <h2 className="m-5 home-title">Travel Logs</h2>
      <AddPostModal>
        <button className="btn d-block w-100 add-a-post-btn">Add a Post</button>
      </AddPostModal>
      {loading ? <div>Loading...</div> : <Posts posts={posts} />}
    </div>
  );
};

export default Allposts;
