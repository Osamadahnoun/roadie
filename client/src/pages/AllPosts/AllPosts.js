import React from "react";
import Posts from "../../components/Posts/Posts";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../utils/queries";

const Allposts = () => {
  const { loading, data } = useQuery(GET_ALL_POSTS);

  const posts = data?.posts || [];
  console.log(posts);
  return (
    <div className="container d-flex flex-column justify-content-center">
      <h2 className="m-5 home-title">Travel Logs</h2>
      {loading ? <div>Loading...</div> : <Posts posts={posts} />}
    </div>
  );
};

export default Allposts;
