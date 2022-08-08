import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <header>
      <Navbar bg="primary" variant={"primary"} expand="lg">
        <Navbar.Brand href="/" className="text-white">
          Bichitos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="text-white">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/alimentos" className="text-white">
              Alimentos
            </Nav.Link>
            <Nav.Link as={Link} to="/varios" className="text-white">
              Varios
            </Nav.Link>
            <Nav.Link as={Link} to="/plantas" className="text-white">
              Plantas
            </Nav.Link>
            <Nav.Link as={Link} to="/agroquimicos" className="text-white">
              Agroquimicos
            </Nav.Link>
            <Nav.Link as={Link} to="/carrito" className="text-white">
              Carrito
              <span> {cart.length}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
