import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <header>
      <Navbar bg="primary" variant={"primary"} expand="lg" className="p-2">
        <Navbar.Brand as={Link} to="/" className="text-white">
          Bichitos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="myToggler" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/carrito" className="text-white">
              Carrito
              <span className="cart-items-length"> {cart.length}</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/alimentos" className="text-white">
              Alimentos
            </Nav.Link>
            <Nav.Link as={Link} to="/varios" className="text-white">
              Varios
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
