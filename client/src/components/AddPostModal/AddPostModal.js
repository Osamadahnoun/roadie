import React, { useState } from "react";
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
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";

const AddPostModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formState, setFormState] = useState({
    location: "",
    cost: "",
    post: "",
    heritage: "",
    places: "",
    accessibility: "",
    extra: "",
  });

  const { location, cost, post, heritage, places, accessibility, extra } =
    formState;

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({
        variables: {
          location,
          cost,
          post,
          heritage,
          places,
          accessibility,
          extra,
        },
      });
      setFormState({
        location: "",
        cost: "",
        post: "",
        heritage: "",
        places: "",
        accessibility: "",
        extra: "",
      });
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

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
              <Input
                name="location"
                type="text"
                placeholder="Enter location"
                onChange={handleChange}
                value={location}
              />
              <FormLabel htmlFor="cost" fontSize="2rem" mt={5}>
                Cost of Travel
              </FormLabel>
              <Input
                name="cost"
                type="number"
                placeholder="Cost of Travel"
                onChange={handleChange}
                value={cost}
              />
              <FormLabel htmlFor="post" fontSize="2rem" mt={5}>
                We want to hear all about your trip!
              </FormLabel>
              <Textarea
                placeholder="Tell us about your trip!"
                name="post"
                onChange={handleChange}
                value={post}
              />
              <FormLabel fontSize="2rem" mt={5}>
                The information below isn't required
              </FormLabel>
              <Textarea
                name="heritage"
                type="text"
                placeholder="Heritages"
                mt={5}
                onChange={handleChange}
                value={heritage}
              />

              <Textarea
                name="places"
                type="text"
                placeholder="Places to Visit"
                mt={5}
                onChange={handleChange}
                value={places}
              />

              <Textarea
                name="accessibility"
                type="text"
                placeholder="Accessibility"
                mt={5}
                onChange={handleChange}
                value={accessibility}
              />

              <Textarea
                name="extra"
                type="text"
                placeholder="Feel free to add any additional info here!"
                mt={5}
                onChange={handleChange}
                value={extra}
              />
              {error && <span className="ml-2">Something went wrong...</span>}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleSubmit}>
              Share Log!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPostModal;
