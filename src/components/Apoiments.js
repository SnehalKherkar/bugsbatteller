import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiSearch } from "react-icons/bi";
const Apoiments = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://themes.dynamiclayers.net/arkid/wp-content/themes/arkid/assets/img/logo-dark.png"
              alt="Home"
              style={{ width: "100px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">HOME</Nav.Link>
              <Nav.Link href="#action2">ABOUT US</Nav.Link>
              <Nav.Link href="#action2">PROJECTS</Nav.Link>
              <Nav.Link href="#action2">PAGES</Nav.Link>
              <Nav.Link href="#action2">BLOGS</Nav.Link>
              <Nav.Link href="#action2">CONTACT</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <span
                style={{
                  fontSize: "20px",
                  marginTop: "5px",
                  marginRight: "30PX",
                }}
              >
                <BiSearch />
              </span>
              <Button variant="outline-success" style={{backgroundColor:"#BFCA02",color:"white"}}>MAKE APPOINTMENT</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Apoiments;
