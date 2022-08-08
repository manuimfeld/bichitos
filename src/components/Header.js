import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand href="/">Bichitos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/alimentos">
              Alimentos
            </Nav.Link>
            <Nav.Link as={Link} to="/varios">
              Varios
            </Nav.Link>
            <Nav.Link as={Link} to="/plantas">
              Plantas
            </Nav.Link>
            <Nav.Link as={Link} to="/agroquimicos">
              Agroquimicos
            </Nav.Link>
            <Nav.Link as={Link} to="/carrito">
              Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
