import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Navbar.css";

export default class NavComponent extends Component {
  render() {
    // Bootstrap navbar that uses react router dom for links.
    return (
      <div>
        <Navbar className="navFont" bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand className="navLogo" as={Link} to="/">
              <FontAwesomeIcon icon="clipboard-list" /> GoList
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="navLink" as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="navLink" as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link className="navLink" as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
