import React, { useState } from "react";
import { Textarea, FormControl, Button, useToast } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import './Comment.css'

const Comment = ({ postId }) => {
  const [commentBody, setCommentBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const toast = useToast();

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setCommentBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleSubmit = async () => {
    try {
      await addComment({
        variables: { commentBody, postId },
      });
      setCommentBody("");
      setCharacterCount(0);
      toast({
        title: "Comment Added",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <FormControl className="col-10 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        Character Count: {characterCount}/280
        <Textarea
          className="textarea"
          placeholder="Leave a comment here"
          fontSize="1.5rem"
          border="solid"
          borderWidth="5px"
          onChange={handleChange}
          value={commentBody}
        />
        {error && <span className="ml-2">Something went wrong...</span>}
        <Button
          mt="2"
          width="100%"
          onClick={handleSubmit}
          fontSize="1.25rem"
          marginBottom={5}
        >
          Submit Comment
        </Button>
      </FormControl>
    </div>
  );
};

export default Comment;
