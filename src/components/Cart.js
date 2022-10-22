import React from "react";
import cartTotalPrice from "../helpers/cartTotalPrice";
import ItemCart from "./ItemCart";

const Cart = ({ cart, setCart }) => {
  return (
    <section className="section-cart">
      <div className="cart-articles">
        {cart.map((product, index) => {
          return (
            <ItemCart
              key={product.id}
              product={product}
              index={index}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
      <p>Total: {cartTotalPrice(cart)}</p>
    </section>
  );
};

export default Cart;
