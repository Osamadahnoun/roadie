import React, { useState, useEffect } from "react";
import "./Header.css";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Signup from "../Authorization/Signup/Signup";
import Login from "../Authorization/Login/Login";

import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  return (
    <div className="w-100">
      <Navbar expand="lg" className="p-3 navBar">
        <Container className="container">
          <div>
            <Navbar.Brand className="title1">
              <p>Roadie</p>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto hoverPointer">
                <Nav.Link className="text1" as={Link} to="/allposts">
                  Home
                </Nav.Link>
                {/* <NavDropdown
                  title="Action"
                  id="basic-nav-dropdown"
                  className="dropdown"
                >
                  <NavDropdown.Item className="text1"></NavDropdown.Item>
                </NavDropdown> */}
                {/* if user is logged in show saved books and logout */}
                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link className="text1 hoverPointer" as={Link} to="/profile">
                      My Profile
                    </Nav.Link>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </>
                ) : (
                  <Nav.Link className="hoverPointer" onClick={() => setShowModal(true)}>
                    <p>Login/Sign Up</p>
                  </Nav.Link>
                )}
                <Nav.Link className="hoverPointer" onClick={getCheckout}>Donate</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton className="modalHeader">
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link className="hoverPointer login" eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="hoverPointer signup" eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <Signup handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </div>
  );
};

export default Header;
