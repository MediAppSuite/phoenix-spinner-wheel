import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "white",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ width: "75%" }}>
          <img src="/images/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to={"/my-winnings"}>My Winnings</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/my-details"}>My Details</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
