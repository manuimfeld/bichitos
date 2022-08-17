import React, { useEffect, useState } from "react";
import AddItemCart from "../helpers/AddItemCart";
import ApiAlimentoGato from "../helpers/ApiAlimentoGato";
import SweetAlert from "../helpers/SweetAlert";
import Loading from "./Loading";

const AlimentosGato = ({ cart, setCart }) => {
  const [alimentos, setAlimentos] = useState(null);
  const [raza, setRaza] = useState("Bebe");
  const [activeButton, setActiveButton] = useState("first");

  useEffect(() => {
    /* Llamo a la API y seteo la información que trae en el State de alimentos  */
    ApiAlimentoGato(setAlimentos, raza);
  }, [raza]);

  const handleSetRaza = (e) => {
    /* Seteo qué raza se va a buscar al llamar a la Api en el useEffect */
    setRaza(e.currentTarget.textContent);
  };

  const handleSetCart = (e, index, cart, setCart) => {
    /* Agrego un item al carrito y muestro una alerta avisando que se agregó correctamente */
    AddItemCart(e, index, cart, setCart);
    SweetAlert(e.attributes.Nombre);
  };

  return (
    <>
      {alimentos === null ? (
        <Loading />
      ) : (
        <>
          <div className="options">
            <button
              onClick={(e) => {
                handleSetRaza(e);
                setActiveButton("first");
              }}
              className={activeButton === "first" ? "activeButton" : ""}
            >
              Bebe
            </button>
            <button
              onClick={(e) => {
                handleSetRaza(e);
                setActiveButton("second");
              }}
              className={activeButton === "second" ? "activeButton" : ""}
            >
              Adulto
            </button>
            <button
              onClick={(e) => {
                handleSetRaza(e);
                setActiveButton("third");
              }}
              className={activeButton === "third" ? "activeButton" : ""}
            >
              Urinary
            </button>
          </div>
          <div className="container">
            <div class="row row-alimentosperro">
              {alimentos.map((alimento) => {
                return (
                  <div className="col-sm-3" key={alimento.id}>
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i class="fa fa-heart-o"></i>
                      </span>
                      <div className="img-box">
                        <img
                          src={alimento.attributes.imgURL}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>{alimento.attributes.Nombre}</h4>
                        <p className="item-price">
                          <b>${alimento.attributes.Precio} </b>
                        </p>
                        <a
                          href="#a"
                          className="btn btn-primary"
                          onClick={() => handleSetCart(alimento, cart, setCart)}
                        >
                          Agregar al carrito
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AlimentosGato;
