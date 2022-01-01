import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

const Header = () => {
  let { url } = useRouteMatch();
 
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Hero Rider</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Link  to={url+'/rider'} className="nav-link">
              Join as a rider
            </Link>
            <Link  to="/admin" className="nav-link">
              Admin
            </Link>
            <Link  to="/" className="nav-link">
              Join as a Driving Lesson Learner
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
