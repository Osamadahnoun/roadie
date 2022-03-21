import React from "react";
import EditPostModal from "../EditPostModal/EditPostModal";

const EditPostBtn = ({ posts }) => {
  return (
    <EditPostModal posts={posts}>
      {/* <button className="bg-danger">EditPostBtn</button>{" "} */}
      <div className="bg-danger rounded p-3 text-white">Edit Log</div>
    </EditPostModal>
  );
};

export default EditPostBtn;
