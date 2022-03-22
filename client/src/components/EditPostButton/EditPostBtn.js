import React from "react";
import EditPostModal from "../EditPostModal/EditPostModal";

const EditPostBtn = ({ posts }) => {
  return (
    <EditPostModal posts={posts}>
      {/* <button className="bg-danger">EditPostBtn</button>{" "} */}
      <div><button className="btn d-block rounded p-3 text-white edit">Edit Log</button></div>
    </EditPostModal>
  );
};

export default EditPostBtn;
