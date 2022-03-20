import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../../utils/mutations";
import { GET_ALL_POSTS, QUERY_ME } from "../../utils/queries";

const DeletePostButton = ({ posts }) => {
  //   const [deletePost, { error }] = useMutation(DELETE_POST, {
  //     update(cache, { data: { deletePost } }) {
  //       const { posts } = cache.readQuery({ query: GET_ALL_POSTS });

  //       cache.writeQuery({
  //         query: GET_ALL_POSTS,
  //         data: { posts: [deletePost, ...posts] },
  //       });

  //       const { me } = cache.readQuery({ query: QUERY_ME });
  //       cache.writeQuery({
  //         query: QUERY_ME,
  //         data: { me: { ...me, posts: [...me.posts, deletePost] } },
  //       });
  //     },
  //   });

  const [deletePost, { error }] = useMutation(DELETE_POST, {
    update(cache, { data: { deletePost } }) {
      try {
        const { posts } = cache.readQuery({ query: GET_ALL_POSTS });
        cache.writeQuery({
          query: GET_ALL_POSTS,
          data: { posts: [deletePost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, deletePost] } },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleDelete = async () => {
    try {
      await deletePost({
        variables: { postId: posts._id },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button
        className="bg-danger rounded p-3 text-white"
        onClick={handleDelete}
      >
        {posts._id}
      </button>
    </div>
  );
};

export default DeletePostButton;
