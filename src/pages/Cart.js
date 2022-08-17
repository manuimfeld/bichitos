/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import SendWhatsapp from "../helpers/SendWhatsapp";
import RemoveItemCart from "../helpers/RemoveItemCart";
import EditItemAmount from "../helpers/EditItemAmount";
import CartTotalPrice from "../helpers/CartTotalPrice";
import { Link } from "react-router-dom";
import Category from "../components/Category";

const Cart = ({ cart, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length >= 0) {
      setTotalPrice(CartTotalPrice(cart));
    }
  }, [cart]);

  return (
    <>
      {cart.length === 0 ? (
        <div className="carrito-vacio">
          <h1>El carrito está vacio</h1>
          <p>Agregá algún producto y volvé para enviar la compra</p>
          <Category />
        </div>
      ) : (
        <>
          <div className="container-cart">
            <div className="container mt-5 mb-5">
              <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                  <div className="p-2">
                    <h4>Carrito</h4>
                  </div>
                  {cart.map(({ item: alimento, cantidad }, index) => {
                    return (
                      <div
                        className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded"
                        key={alimento.id}
                      >
                        <div className="mr-1">
                          <img
                            className="rounded"
                            src={alimento.attributes.imgURL}
                            width="70"
                            alt="asd"
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center product-details">
                          <span className="font-weight-bold">
                            {alimento.attributes.Nombre}
                          </span>
                          <div className="d-flex flex-row product-desc">
                            <div className="size mr-1">
                              <span className="font-weight-bold">
                                {alimento.attributes.Raza}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center qty">
                          <button
                            className="button-amount"
                            onClick={(e) =>
                              EditItemAmount(e, cart, setCart, index)
                            }
                          >
                            -
                          </button>
                          <h5 className="text-grey mt-1 mr-1 ml-1">
                            {cantidad}
                          </h5>
                          <button
                            className="button-amount"
                            onClick={(e) =>
                              EditItemAmount(e, cart, setCart, index)
                            }
                          >
                            +
                          </button>
                        </div>
                        <div>
                          <h5 className="text-grey">
                            ${alimento.attributes.Precio * cantidad}
                          </h5>
                        </div>
                        <div className="d-flex align-items-center">
                          <i
                            className="btn fa fa-trash mb-1 text-danger"
                            onClick={() =>
                              RemoveItemCart(cart, setCart, alimento, index)
                            }
                          >
                            Eliminar
                          </i>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="container mt-5 mb-5">
              <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                  <div className="d-flex flex-column align-items-center p-2 bg-white rounded">
                    <span>Total: ${totalPrice}</span>
                    <a
                      href={`https://api.whatsapp.com/send/?phone=%2B5491144036816&text=
                      ${SendWhatsapp(cart)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        className="btn btn-warning btn-block btn-lg ml-2 pay-button"
                        type="button"
                      >
                        Enviar compra
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
