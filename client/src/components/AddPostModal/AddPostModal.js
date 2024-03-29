import React, { useState } from "react";
import "./AddPostModal.css";
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
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { GET_ALL_POSTS, QUERY_ME } from "../../utils/queries";

const AddPostModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [formState, setFormState] = useState({
    location: "",
    cost: "",
    heritage: "",
    places: "",
    accessibility: "",
    extra: "",
  });

  const [characterCount, setCharacterCount] = useState({
    locationCount: 0,
    heritageCount: 0,
    placesCount: 0,
    accessibilityCount: 0,
    extraCount: 0,
  });

  const {
    locationCount,
    heritageCount,
    placesCount,
    accessibilityCount,
    extraCount,
  } = characterCount;

  const [mainPost, setMainPost] = useState("");
  const [mainCharacterCount, setMainCharacterCount] = useState(0);
  const [imageState, setImageState] = useState("");

  const { location, cost, heritage, places, accessibility, extra } = formState;

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

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: GET_ALL_POSTS });

        cache.writeQuery({
          query: GET_ALL_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (error) {
        console.log(error);
      }

      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleSubmit = async () => {
    try {
      await addPost({
        variables: {
          postText: mainPost,
          location: location,
          locationImage: imageState,
          cost: parseInt(cost),
          heritages: heritage,
          placesToVisit: places,
          accessibility: accessibility,
          other: extra,
        },
      });
      setFormState({
        location: "",
        cost: "",
        heritage: "",
        places: "",
        accessibility: "",
        extra: "",
      });
      setMainPost("");
      setImageState("");
      onClose();
      toast({
        title: "Log Created!",
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
    <>
      <span onClick={onOpen} className="hoverPointer">
        {children}
      </span>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl" className="modal">
        <ModalOverlay className="modalHeader" />
        <ModalContent d="flex" className="modalHeader">
          <ModalHeader
            fontSize="2rem"
            alignSelf="center"
            className="modalHeader"
          >
            Add Travel Log
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modalHeader">
            <FormControl className="modalHeader">
              <FormLabel
                htmlFor="location"
                fontSize="2rem"
                mt={5}
                className="modalHeader"
              >
                Location Visited
              </FormLabel>
              <Input
                className="input"
                name="location"
                id="locationCount"
                type="text"
                placeholder="Enter location"
                onChange={handleChange}
                value={location}
              />
              Character Count: {locationCount}/100
              <FormLabel
                htmlFor="cost"
                fontSize="2rem"
                mt={5}
                className="modalHeader"
              >
                Cost of Travel (USD)
              </FormLabel>
              <Input
                className="input"
                name="cost"
                type="number"
                placeholder="Cost of Travel"
                onChange={handleChange}
                value={cost}
              />
              <FormLabel
                htmlFor="post"
                fontSize="2rem"
                mt={5}
                className="modalHeader"
              >
                We want to hear all about your trip!
              </FormLabel>
              <Textarea
                className="input"
                placeholder="Tell us about your trip!"
                name="post"
                onChange={handleChangeMain}
                value={mainPost}
              />
              Character Count: {mainCharacterCount}/280
              <FormLabel fontSize="2rem" mt={5} className="modalHeader">
                The information below isn't required
              </FormLabel>
              <Textarea
                className="input"
                name="heritage"
                id="heritageCount"
                type="text"
                placeholder="Heritages"
                mt={5}
                onChange={handleChange}
                value={heritage}
              />
              Character Count: {heritageCount}/100
              <Textarea
                className="input"
                name="places"
                id="placesCount"
                type="text"
                placeholder="Places to Visit"
                mt={5}
                onChange={handleChange}
                value={places}
              />
              Character Count: {placesCount}/100
              <Textarea
                className="input"
                name="accessibility"
                id="accessibilityCount"
                type="text"
                placeholder="Accessibility"
                mt={5}
                onChange={handleChange}
                value={accessibility}
              />
              Character Count: {accessibilityCount}/100
              <Textarea
                className="input"
                name="extra"
                id="extraCount"
                type="text"
                placeholder="Feel free to add any additional info here!"
                mt={5}
                onChange={handleChange}
                value={extra}
              />
              Character Count: {extraCount}/100
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

          <ModalFooter className="modalHeader">
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Share Log!
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

export default AddPostModal;
