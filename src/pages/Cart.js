import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      {cart === null ? (
        <p>asd</p>
      ) : (
        cart.map((alimento) => {
          return (
            <li key={alimento.id}>
              <img
                src={alimento.attributes.imgURL}
                alt=""
                width="100"
                height="100"
              />
              <p>{alimento.attributes.Nombre}</p>
              <p>{alimento.attributes.Precio}</p>
            </li>
          );
        })
      )}
    </>
  );
};

export default Cart;
