import React, { useState } from "react";
import "./Header.css";
import { Navbar, Nav, Container, NavDropdown, Modal, Tab } from "react-bootstrap";
import AddPostModal from "../AddPostModal/AddPostModal";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'
import Signup from '../Authorization/Signup/Signup'
import Login from '../Authorization/Login/Login'

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-100">
      <Navbar bg="light" expand="lg" className="p-3">
        <Container className="container">
          <div>
            <Navbar.Brand className="title1">
              <Link to="/allposts">
                <p>Roadie</p>
              </Link>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="text1">
                  <Link to="/allposts">
                    <p>Home</p>
                  </Link>
                </Nav.Link>
                <Nav.Link className="text1">
                  <Link to="/profile">
                    <p>My Profile</p>
                  </Link>
                </Nav.Link>
                <NavDropdown
                  title="Action"
                  id="basic-nav-dropdown"
                  className="dropdown"
                >
                  <NavDropdown.Item className="text1">
                    <AddPostModal>
                      <p>Add a Post</p>
                    </AddPostModal>
                  </NavDropdown.Item>
                </NavDropdown>
               {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
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
