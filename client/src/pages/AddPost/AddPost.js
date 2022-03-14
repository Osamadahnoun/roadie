import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import "./AddPost.css";

const AddPost = () => {
  return (
    <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 mt-4 mb-3 form-cont">
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicLocation">
          <Form.Label class="label">
            <p>Location Visited</p>
          </Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Enter location"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCost">
          <Form.Label class="label">
            <p>Cost of Travel</p>
          </Form.Label>
          <Form.Control
            type="number"
            name="cost"
            placeholder="Cost of travel"
          />
        </Form.Group>
        {/*  */}
        <Form.Label className="label">
          <p>We want to hear all about your trip!</p>
        </Form.Label>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Tell us about your trip!"
        >
          <Form.Control as="textarea" name="trip" style={{ height: "100px" }} />
        </FloatingLabel>
        {/*  */}
        <Form.Label className="mt-5 mb-0 label">
          <p>The information below isn't required</p>
        </Form.Label>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Heritages"
          className="mb-3 mt-3"
        >
          <Form.Control as="textarea" name="heritage" />
        </FloatingLabel>
        {/*  */}
        <FloatingLabel
          controlId="floatingTextarea"
          label="Places to Visit"
          className="mb-3"
        >
          <Form.Control as="textarea" name="places" />
        </FloatingLabel>
        {/*  */}
        <FloatingLabel
          controlId="floatingTextarea"
          label="Accessibility"
          className="mb-3"
        >
          <Form.Control as="textarea" name="accessibility" />
        </FloatingLabel>
        {/*  */}
        <FloatingLabel
          controlId="floatingTextarea"
          label="Feel free to add any additional info here!"
          className="mb-3"
        >
          <Form.Control as="textarea" name="accessibility" />
        </FloatingLabel>
        {/*  */}
        {/* <Button variant="danger" className="w-100 " type="submit">
          Share your Log!
        </Button> */}
        <button className="logBtn w-100 p-2">Share your Log!</button>
      </Form>
    </div>
  );
};

export default AddPost;
