import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../data/img/logo.png";

function BasicExample() {
  const [navExpanded, setNavExpanded] = useState(false);
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbarstyle mb-4 position-relative"
        expanded={navExpanded}
        onToggle={(expanded) => setNavExpanded(expanded)}
      >
        <Container fluid className="">
          <Navbar.Toggle
            className="position-absolute top-0 start-0 mt-3 ms-3"
            aria-controls="main-navbar"
          />
          <Navbar.Brand
            as={Link}
            to="/*"
            className=" position-absolute start-50 translate-middle-x m-0 logom"
            href="#home"
          >
            {" "}
            <img
              src={Logo}
              width="183"
              height="250"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse
            id="main-navbar"
            className="mt-5 mt-lg-0"
            onClick={() => setNavExpanded(false)} 
          >
            <Nav className=" d-flex w-100 justify-content-around customnav mb-5">
              <Nav.Link className="fs-2" href="/taglist">
                etiketler
              </Nav.Link>
              <Nav.Link className="fs-2" href="#home">
                kaynaklar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`blur-overlay ${navExpanded ? "active" : ""}`} />
    </>
  );
}

export default BasicExample;
