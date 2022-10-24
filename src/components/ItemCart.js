import React from "react";
import editItemAmount from "../helpers/editItemAmount";
import removeItemCart from "../helpers/removeItemCart";

const ItemCart = ({ product, index, cart, setCart }) => {
  return (
    <article>
      <img
        src={`http://localhost:1337${product.attributes.Imagen.data.attributes.url}`}
        alt=""
      />
      <div className="cart-product-info">
        <p>Top nutrition</p>
        <p>{product.attributes.Precio * product.cantidad}</p>
        <div className="cart-product-count">
          <p>Cantidad</p>
          <button onClick={(e) => editItemAmount(e, cart, setCart, index)}>
            -
          </button>
          <p>{product.cantidad}</p>
          <button onClick={(e) => editItemAmount(e, cart, setCart, index)}>
            +
          </button>
        </div>
      </div>
      <button
        className="button-remove-product"
        onClick={() => removeItemCart(product, cart, setCart)}
      >
        X
      </button>
    </article>
  );
};

export default ItemCart;
