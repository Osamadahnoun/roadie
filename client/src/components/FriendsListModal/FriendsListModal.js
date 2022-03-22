import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  VStack,
  StackDivider,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FriendsListModal = ({ children, friendCount, username, friends }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span onClick={onOpen} className="hoverPointer">
        {children}
      </span>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl" classname="modal">
        <ModalOverlay className="modalHeader" />
        <ModalContent
          className="modalHeader"
          textAlign="center"
          fontSize="2rem"
        >
          <ModalHeader className="modalHeader" fontSize="2.5rem">
            Friends List
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modalHeader">
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
              className="modalHeader"
            >
              <Box>
                {username}'s {friendCount}{" "}
                {friendCount === 1 ? "friend" : "friends"}
              </Box>
              {friends.map((friend) => (
                <Box
                  h="40px"
                  className="btn w-100 display-block mb-2"
                  key={friend._id}
                  color="#006D77"
                  fontSize="1.5rem"
                >
                  <Link to={`/profile/${friend.username}`}>
                    {friend.username}
                  </Link>
                </Box>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter className="modalHeader">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FriendsListModal;
