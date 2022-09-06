import React from "react";
import menu from "../img/menu.svg";
import cart from "../img/cart.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/productos");
  };

  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => navigate("/carrito")}>
            <img src={menu} alt="" />
          </li>
          <li>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <input type="text" placeholder="Buscá tu producto aquí" />
              <button type="submit"></button>
            </form>
          </li>
          <li>
            <img src={cart} alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
