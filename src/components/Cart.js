import React from "react";
import cartTotalPrice from "../helpers/cartTotalPrice";
import editItemAmount from "../helpers/editItemAmount";
import removeItemCart from "../helpers/removeItemCart";

const Cart = ({ cart, setCart }) => {
  return (
    <section className="section-cart">
      <div className="cart-articles">
        {cart.map((product, index) => {
          return (
            <article key={product.id}>
              <img
                src={`http://192.168.0.70:1337${product.attributes.Imagen.data.attributes.url}`}
                alt=""
              />
              <div className="cart-product-info">
                <p>Top nutrition</p>
                <p>{product.attributes.Precio * product.cantidad}</p>
                <div className="cart-product-count">
                  <p>Cantidad</p>
                  <button
                    onClick={(e) => editItemAmount(e, cart, setCart, index)}
                  >
                    -
                  </button>
                  <p>{product.cantidad}</p>
                  <button
                    onClick={(e) => editItemAmount(e, cart, setCart, index)}
                  >
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
        })}
      </div>
      <p>Total: {cartTotalPrice(cart)}</p>
    </section>
  );
};

export default Cart;
