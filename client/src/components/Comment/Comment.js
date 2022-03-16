import React, { useState } from "react";
import { Textarea, FormControl, Button, useToast } from "@chakra-ui/react";
const Comment = () => {
  const [commentBody, setCommentBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const toast = useToast();

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setCommentBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleSubmit = () => {
    setCommentBody("");
    setCharacterCount(0);
    toast({
      title: "Comment Added",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <FormControl>
      Character Count: {characterCount}/280
      <Textarea
        placeholder="Leave a comment here"
        fontSize="1.5rem"
        border="solid"
        borderWidth="5px"
        onChange={handleChange}
        value={commentBody}
      />
      <Button
        backgroundColor="whitesmoke"
        mt="2"
        width="100%"
        onClick={handleSubmit}
        fontSize="1.25rem"
      >
        Submit Comment
      </Button>
    </FormControl>
  );
};

export default Comment;
