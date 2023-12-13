import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import { auth } from "../firebase/firebase";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [navItems, setNavItems] = useState(<></>);

  useEffect(() => {
    console.log(auth.currentUser);
    
    if (auth.currentUser) {
      setNavItems(
        <>
          <Nav.Link>
            <Link
              to={"/my-winnings"}
              className="f-cl-orange text-decoration-none"
            >
              My Winnings
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to={"/my-details"}
              className="f-cl-orange text-decoration-none"
            >
              My Details
            </Link>
          </Nav.Link>
        </>
      );
    } else {
      setNavItems(
        <Nav.Link className="f-cl-orange" onClick={() => setShow(true)}>
          Login/Sign Up
        </Nav.Link>
      );
    }
  }, [auth.currentUser]);

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
            {navItems}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {show ? <LoginModal show={show} setShow={setShow} /> : ""}
    </Navbar>
  );
}
