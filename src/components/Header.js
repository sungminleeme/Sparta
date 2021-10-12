import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import SignUp from "../page/SignUp";
import SignIn from "../page/SignIn";

const Header = () => {
  const [signUpOn, setSignUpOn] = useState(false);
  const [signInOn, setSignInOn] = useState(false);
  return (
    <>
      <SignUp show={signUpOn} onHide={() => setSignUpOn(false)} />
      <SignIn show={signInOn} onHide={() => setSignInOn(false)} />
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="float-right;">
                <Nav.Link>
                  <Button variant="primary" onClick={() => setSignInOn(true)}>
                    Sign In
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button variant="secondary" onClick={() => setSignUpOn(true)}>
                    Sign Up
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
