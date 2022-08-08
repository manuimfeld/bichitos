import React from "react";
import CarritoImage from "../img/carrito-de-compras.svg";
import WhatsappImage from "../img/whatsapp.svg";
import DolarImage from "../img/dolar.svg";
import DeliveryImage from "../img/lado-del-camion.svg";

const Steps = () => {
  return (
    <>
      <h2 className="h2-title">Comprá en 4 pasos</h2>
      <div className="steps-container">
        <article>
          <img src={CarritoImage} alt="" className="image-steps" />
          <h2>Armá tu pedido</h2>
        </article>
        <article>
          <img src={WhatsappImage} alt="" className="image-steps" />
          <h2>Envíalo confirmando la compra</h2>
        </article>
        <article>
          <img src={DolarImage} alt="" className="image-steps" />
          <h2>Elegís el método de pago</h2>
        </article>
        <article>
          <img src={DeliveryImage} alt="" className="image-steps" />
          <h2>Nosotros te lo llevamos en el mismo día</h2>
        </article>
      </div>
    </>
  );
};

export default Steps;
