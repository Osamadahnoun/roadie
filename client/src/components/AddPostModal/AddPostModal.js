import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

const AddPostModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent d="flex">
          <ModalHeader fontSize="2rem" alignSelf="center">
            Add Travel Log
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="location" fontSize="2rem" mt={5}>
                Location Visited
              </FormLabel>
              <Input id="location" type="text" placeholder="Enter location" />
              <FormLabel htmlFor="cost" fontSize="2rem" mt={5}>
                Cost of Travel
              </FormLabel>
              <Input id="cost" type="number" placeholder="Cost of Travel" />
              <FormLabel htmlFor="cost" fontSize="2rem" mt={5}>
                We want to hear all about your trip!
              </FormLabel>
              <Textarea placeholder="Tell us about your trip!" />
              <FormLabel fontSize="2rem" mt={5}>
                The information below isn't required
              </FormLabel>
              <Textarea
                id="cost"
                type="number"
                placeholder="Heritages"
                mt={5}
              />

              <Textarea
                id="cost"
                type="number"
                placeholder="Places to Visit"
                mt={5}
              />

              <Textarea
                id="cost"
                type="number"
                placeholder="Accessibility"
                mt={5}
              />

              <Textarea
                id="cost"
                type="number"
                placeholder="Feel free to add any additional info here!"
                mt={5}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Share Log!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPostModal;
