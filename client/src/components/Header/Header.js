import React from "react";
import "./Header.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="p-3 c">
        <Container className="container">
          <div>
            <Navbar.Brand href="#home" className="title1">
              <p>Roadie</p>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="text1">
                  <p>Home</p>
                </Nav.Link>
                <Nav.Link href="#link" className="text1">
                  <p>My Profile</p>
                </Nav.Link>
                <NavDropdown
                  title="Action"
                  id="basic-nav-dropdown"
                  className="dropdown"
                >
                  <NavDropdown.Item href="#action/3.1" className="text1">
                    <p>Add a Post</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="text1">
                    <p>Login</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className="text1">
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
