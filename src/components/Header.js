import React from "react";
import menu from "../img/menu.svg";
import cart from "../img/cart.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={menu} alt="" />
          </li>
          <li>
            <form action="">
              <input type="text" placeholder="Buscá tu producto aquí" />
              <button></button>
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
