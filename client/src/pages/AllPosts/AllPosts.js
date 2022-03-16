import React from "react";
import Posts from "../../components/Posts/Posts";

const Allposts = () => {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <h2 className="m-5 home-title">Travel Logs</h2>
      <Posts />
    </div>
  );
};

export default Allposts;
