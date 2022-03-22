import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Button,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { EDIT_POST } from "../../utils/mutations";
// import { GET_ALL_POSTS, QUERY_ME } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import './EditPostModal.css'

const EditPostModal = ({ children, posts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const {
    location,
    cost,
    postText,
    heritages,
    placesToVisit,
    accessibility,
    other,
    locationImage,
  } = posts;

  const [formState, setFormState] = useState({
    locationInitial: location,
    costInitial: cost,
    heritageInitial: heritages,
    placesInitial: placesToVisit,
    accessibilityInitial: accessibility,
    extraInitial: other,
  });

  const [characterCount, setCharacterCount] = useState({
    locationCount: 0,
    heritageCount: 0,
    placesCount: 0,
    accessibilityCount: 0,
    extraCount: 0,
  });

  const {
    locationCountInitial,
    heritageCountInitial,
    placesCountInitial,
    accessibilityCountInitial,
    extraCountInitial,
  } = characterCount;

  const [mainPost, setMainPost] = useState(postText);
  const [mainCharacterCount, setMainCharacterCount] = useState(0);
  const [imageState, setImageState] = useState(locationImage);

  const {
    locationInitial,
    costInitial,
    heritageInitial,
    placesInitial,
    accessibilityInitial,
    extraInitial,
  } = formState;

  const handleChange = (event) => {
    if (event.target.value.length <= 100) {
      setFormState({
        ...formState,
        [event.target.name]: event.target.value,
      });
      setCharacterCount({
        ...characterCount,
        [event.target.id]: event.target.value.length,
      });
    }
  };

  const handleChangeMain = (event) => {
    if (event.target.value.length <= 280) {
      setMainPost(event.target.value);
      setMainCharacterCount(event.target.value.length);
    }
  };

  const handleChangeImage = (event) => {
    setImageState(event.target.value);
  };

  const [editPost, { error }] = useMutation(EDIT_POST);

  const handleSubmit = async () => {
    try {
      await editPost({
        variables: {
          postId: posts._id,
          postText: mainPost,
          location: locationInitial,
          locationImage: imageState,
          cost: parseInt(costInitial),
          heritages: heritageInitial,
          placesToVisit: placesInitial,
          accessibility: accessibilityInitial,
          other: extraInitial,
        },
      });
      setFormState({
        locationInitial: "",
        costInitial: "",
        heritageInitial: "",
        placesInitial: "",
        accessibilityInitial: "",
        extraInitial: "",
      });
      setImageState("");
      setMainPost("");
      onClose();
      toast({
        title: "Log Edited!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay className="modalHeader" />
        <ModalContent className="modalHeader" d="flex">
          <ModalHeader fontSize="2rem" alignSelf="center">
            Edit Travel Log
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="location" fontSize="2rem" mt={5}>
                Location Visited
              </FormLabel>
              <Input
                className="input"
                name="locationInitial"
                id="locationCountInitial"
                type="text"
                placeholder="Enter location"
                onChange={handleChange}
                value={locationInitial}
              />
              Character Count: {locationCountInitial}/100
              <FormLabel htmlFor="cost" fontSize="2rem" mt={5}>
                Cost of Travel (USD)
              </FormLabel>
              <Input
                className="input"
                name="costInitial"
                type="number"
                placeholder="Cost of Travel"
                onChange={handleChange}
                value={costInitial}
              />
              <FormLabel htmlFor="post" fontSize="2rem" mt={5}>
                We want to hear all about your trip!
              </FormLabel>
              <Textarea
                className="input"
                placeholder="Tell us about your trip!"
                name="mainPost"
                onChange={handleChangeMain}
                value={mainPost}
              />
              Character Count: {mainCharacterCount}/280
              <FormLabel fontSize="2rem" mt={5}>
                The information below isn't required
              </FormLabel>
              <Textarea
                className="input"
                name="heritageInitial"
                id="heritageCountInitial"
                type="text"
                placeholder="Heritages"
                mt={5}
                onChange={handleChange}
                value={heritageInitial}
              />
              Character Count: {heritageCountInitial}/100
              <Textarea
                className="input"
                name="placesInitial"
                id="placesCountInitial"
                type="text"
                placeholder="Places to Visit"
                mt={5}
                onChange={handleChange}
                value={placesInitial}
              />
              Character Count: {placesCountInitial}/100
              <Textarea
                className="input"
                name="accessibilityInitial"
                id="accessibilityCountInitial"
                type="text"
                placeholder="Accessibility"
                mt={5}
                onChange={handleChange}
                value={accessibilityInitial}
              />
              Character Count: {accessibilityCountInitial}/100
              <Textarea
                className="input"
                name="extraInitial"
                id="extraCountInitial"
                type="text"
                placeholder="Feel free to add any additional info here!"
                mt={5}
                onChange={handleChange}
                value={extraInitial}
              />
              Character Count: {extraCountInitial}/100
              <FormLabel
                htmlFor="image"
                fontSize="2rem"
                mt={5}
                className="modalHeader"
              >
                Image
              </FormLabel>
              <Tooltip
                aria-label="upload image instructions"
                label="1. Go to https://images.google.com/. | 2. Search for the location you travelled to | 3. Find your favorite image | 4. Right click on image and copy image address | 5. Paste copied address into input area below"
                marginBottom={3}
              >
                Upload image instructions (hover mouse here)
              </Tooltip>
              <Input
                className="input"
                name="imageState"
                type="text"
                placeholder="Paste Image Address"
                onChange={handleChangeImage}
                value={imageState}
              />
              <br></br>
              {error && <span className="ml-2">Something went wrong...</span>}
            </FormControl>
          </ModalBody>

          <ModalFooter>
           <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Update Log!
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPostModal;
