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

  function submitCheckout() {
    const loadingSignal = document.getElementById('loadingSignal');
    loadingSignal.classList.remove('hidden');
    getCheckout();
  }

  return (
    <div className="w-100">
      <Navbar expand="lg" className="p-3 navBar">
        <Container className="container navBar">
          <div className="navBar">
            <Navbar.Brand className="title1">
              <p>Roadie</p>
            </Navbar.Brand>
          </div>
          <div className="hidden loading" id="loadingSignal">Loading...</div>
          <div className='navDiv'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto hoverPointer navDiv">
                <Nav.Link as={Link} to="/allposts">
                  <p>Home</p>
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
                    <Nav.Link className="hoverPointer" as={Link} to="/profile">
                      <p>My Profile</p>
                    </Nav.Link>
                    <Nav.Link onClick={Auth.logout}><p>Logout</p></Nav.Link>
                  </>
                ) : (
                  <Nav.Link className="hoverPointer" onClick={() => setShowModal(true)}>
                    <p>Login/Sign Up</p>
                  </Nav.Link>
                )}
                <Nav.Link className="hoverPointer" onClick={submitCheckout}><p>Donate</p></Nav.Link>
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
            <Modal.Title id="signup-modal" className="modalTitle">
              <Nav variant="tabs">
                <Nav.Item className="modalTitle">
                  <Nav.Link className="hoverPointer login" eventKey="login"><p>Login</p></Nav.Link>
                </Nav.Item>
                <Nav.Item className="modalTitle">
                  <Nav.Link className="hoverPointer signup" eventKey="signup"><p>Sign Up</p></Nav.Link>
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
