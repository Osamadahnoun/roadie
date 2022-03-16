import React from "react";
import Comment from "../../components/Comment/Comment";
import { Card } from "react-bootstrap";

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
          </Card.Body>
        </Card>
      </div>
      <div className="container d-flex justify-content-center">
        <Comment />
      </div>
      <div className="container d-flex justify-content-center m-5">
        <Card className="col-10 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <Card.Header className="header">
            <p className="p-3">Comments</p>{" "}
          </Card.Header>
          <Card.Body>
            <Card.Text className="text border-bottom p-4 pb-5 m-3 d-flex flex-column">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                repellat ratione quae rerum sit tempora quisquam cupiditate rem
                dolorum similique numquam provident incidunt fugit. Similique
                voluptas totam exercitationem excepturi iusto!
              </p>
              <p className="fw-bold mt-3">John on 3/13/22 at 6:30 PM</p>
            </Card.Text>
            <Card.Text className="text border-bottom p-4 pb-5 m-3 d-flex flex-column">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo iure aliquid minus inventore sunt odio mollitia,
                nostrum incidunt vel rerum soluta, ullam saepe sit vero ea?
                Consectetur quas sed laborum!
              </p>
              <p className="mt-3 fw-bold">James on 3/14/22 at 4:30 PM</p>
            </Card.Text>
            <Card.Text className="text border-bottom p-4 pb-5 m-3 d-flex flex-column">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsa sunt facere? Ea veritatis exercitationem commodi quo,
                itaque nihil neque iusto dolor est. Officia amet molestias
                eligendi accusamus assumenda soluta!
              </p>
              <p className="mt-3 fw-bold">Ashley on 3/16/22 at 2:30 PM</p>
            </Card.Text>
            <Card.Text className="text border-bottom p-4 pb-5 m-3 d-flex flex-column">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore eius corrupti ex dolores deleniti culpa, neque aperiam
                possimus non, maiores quia sapiente! Laudantium, pariatur. Odit
                error ut corporis vero sit.
              </p>
              <p className="mt-3 fw-bold">Laurel on 3/15/22 at 1:30 PM</p>
            </Card.Text>
            <Card.Text className="text border-bottom p-4 pb-5 m-3 d-flex flex-column">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quisquam recusandae, non omnis fugiat totam minima odio optio
                sed cum atque quas eos similique! Tempora est praesentium
                nesciunt asperiores. Quia.
              </p>
              <p className="mt-3 fw-bold">Hunter on 3/14/22 at 12:30</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SinglePost;
