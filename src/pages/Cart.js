import React from "react";
import SendWhatsapp from "../helpers/SendWhatsapp";

const Cart = ({ cart }) => {
  return (
    <>
      {cart === null ? (
        <p>asd</p>
      ) : (
        <>
          <div className="container-cart">
            <div className="container mt-5 mb-5">
              <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                  <div className="p-2">
                    <h4>Carrito</h4>
                  </div>
                  {cart.map(({ item: alimento, cantidad }) => {
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
                          <i className="fa fa-minus text-danger"></i>
                          <h5 className="text-grey mt-1 mr-1 ml-1">
                            {cantidad}
                          </h5>
                          <i className="fa fa-plus text-success"></i>
                        </div>
                        <div>
                          <h5 className="text-grey">
                            ${alimento.attributes.Precio * cantidad}
                          </h5>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fa fa-trash mb-1 text-danger"></i>
                        </div>
                      </div>
                    );
                  })}
                  <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                    <a
                      href={`https://api.whatsapp.com/send/?phone=%2B5491144036816&text=
                      ${SendWhatsapp(cart, "%0a")}
                      Ubicacion: %0aAbono en: &type=phone_number&app_absent=0`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        className="btn btn-warning btn-block btn-lg ml-2 pay-button"
                        type="button"
                      >
                        Comprar
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
