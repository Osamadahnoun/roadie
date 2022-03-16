import React from "react";
import "./Header.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import AddPostModal from "../AddPostModal/AddPostModal";
import { Link } from "react-router-dom";

const Header = () => {
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
                  <NavDropdown.Item className="text1">
                    <Link to="/auth">
                      <p>Login</p>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text1">
                    <p>Logout</p>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
