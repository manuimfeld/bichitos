import React, { useEffect, useState } from "react";
import AddItemCart from "../helpers/AddItemCart";
import SweetAlert from "../helpers/SweetAlert";
import Loading from "./Loading";

const AlimentosPerro = ({ cart, setCart, getApiPerro }) => {
  const [alimentos, setAlimentos] = useState(null);
  const [raza, setRaza] = useState("Adulto raza grande");

  useEffect(() => {
    getApiPerro(setAlimentos, raza);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raza]);

  const handleClick = (e) => {
    setRaza(e.currentTarget.textContent);
  };

  const handleSetCart = (e, index, cart, setCart) => {
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
            <button onClick={(e) => handleClick(e)}>Cachorro</button>
            <button onClick={(e) => handleClick(e)}>Adulto raza grande</button>
            <button onClick={(e) => handleClick(e)}>Adulto raza pequeña</button>
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

export default AlimentosPerro;
