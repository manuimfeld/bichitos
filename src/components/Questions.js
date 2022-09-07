import React from "react";
import envios from "../img/delivery-truck.png";
import pago from "../img/dolar.svg";

const Questions = () => {
  return (
    <section className="section-questions">
      <article>
        <img src={envios} alt="" />
        <h2>Envíos</h2>
        <p>Los envíos son desde Pablo Podestá a alrededores</p>
      </article>

      <article>
        <img src={pago} alt="" />
        <h2>Metodos de pago</h2>
        <p>Mercadopago, debito, credito y efectivo</p>
      </article>
    </section>
  );
};

export default Questions;
