import React from "react";
import CarritoImage from "../img/carrito-de-compras.svg";
import WhatsappImage from "../img/whatsapp.svg";
import DolarImage from "../img/dolar.svg";
import DeliveryImage from "../img/lado-del-camion.svg";
import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <>
      <h2 className="title-section">Comprá en 4 pasos</h2>
      <div className="steps-container">
        <article>
          <a href="#category">
            <img src={CarritoImage} alt="" className="image-steps" />
          </a>
          <h2>Armá tu pedido</h2>
        </article>
        <article>
          <Link to="/carrito">
            <img src={WhatsappImage} alt="" className="image-steps" />
          </Link>
          <h2>Envíanos el pedido haciendo un click</h2>
        </article>
        <article>
          <img src={DolarImage} alt="" className="image-steps" />
          <h2>Elegís el método de pago</h2>
        </article>
        <article>
          <img src={DeliveryImage} alt="" className="image-steps" />
          <h2>Te lo llevamos en el mismo día</h2>
        </article>
      </div>
    </>
  );
};

export default Steps;
