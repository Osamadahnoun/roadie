import React from "react";

const SinglePost = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="container d-flex justify-content-center m-5">
        <Card className="col-10 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <Card.Header className="d-flex justify-content-between header flex-wrap">
            <p className="p-3">Osama Dahnoun</p>{" "}
            <p className="p-3">March 13, 2022</p>
          </Card.Header>
          <Card.Body>
            <Card.Title className="title">
              <p>Cape Town, South Africa</p>
            </Card.Title>
            <Card.Text className="text">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                sunt quo, maxime eius minima aperiam veritatis, beatae est
                placeat vitae distinctio neque? Quas ipsa voluptate, eligendi
                non aut suscipit consequatur.
              </p>
            </Card.Text>
            <Card.Title className="border-top pt-2 title">
              <p>Cost of Travel</p>
            </Card.Title>
            <Card.Text className="text">
              <p>~$5,000</p>
            </Card.Text>
            <Card.Title className="border-top pt-2 title">
              <p>Heritages | Places to Visit | Accessibility</p>
            </Card.Title>
            <Card.Text className="text">
              <p>Heritages: Lorem Ipsum</p>
            </Card.Text>
            <Card.Text className="text">
              <p>Places to visit: Lorem Ipsum</p>
            </Card.Text>
            <Card.Text className="text">
              <p>Accessibility: Lorem Ipsum</p>
            </Card.Text>
            <Card.Title className="border-top pt-2 title">
              <p>Extra Information</p>
            </Card.Title>
            <Card.Text className="text">
              <p>Here lies some extra information</p>
            </Card.Text>
            <Card.Title className="border-top title pt-2 d-flex align-items-center">
              <p>Comments: 8 | Click to view or comment!</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SinglePost;
