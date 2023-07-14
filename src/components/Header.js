import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <div style={{width:"auto"}}>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#">
              <span style={{ display: "flex" }}>
                <h3 style={{ color: "white" }}>envato</h3>
                <h3 style={{ color: "green" }}>market</h3>
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>

              <Button style={{ backgroundColor: "#82b440", border: "none" }}>
                Buy now
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div
        style={{
          backgroundColor: "#263a4f",
          color: "white",
          height: "auto",
          alignItems: "center",
          textAlign: "justify",
        }}
      >
        <span style={{ marginLeft: "30px" }}>Call us Today:+1234567890 </span>{" "}
        <span style={{ marginLeft: "30px" }}>Email:email@exmaple.com</span>
      </div>
    </>
  );
};

export default Header;
