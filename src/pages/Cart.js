import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      {cart === null ? (
        <p>asd</p>
      ) : (
        cart.map((alimento) => {
          return (
            <div className="container mt-5 mb-5">
              <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                  <div className="p-2">
                    <h4>Carrito</h4>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
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
                      <h5 className="text-grey mt-1 mr-1 ml-1">2</h5>
                      <i className="fa fa-plus text-success"></i>
                    </div>
                    <div>
                      <h5 className="text-grey">
                        ${alimento.attributes.Precio}
                      </h5>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="fa fa-trash mb-1 text-danger"></i>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                    <button
                      className="btn btn-warning btn-block btn-lg ml-2 pay-button"
                      type="button"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Cart;
