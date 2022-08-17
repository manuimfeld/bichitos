import React from "react";

const Ofertas = () => {
  return (
    <>
      <h2 className="h2-title">Alimentos en oferta</h2>
      <div className="alimentos-top-container">
        <article>
          <img src={require("../img/aliment.png")} alt="" />
          <p>Dog selection</p>
        </article>
        <article>
          <img src={require("../img/catchow.jpg")} alt="" />
          <p>Cat chow</p>
        </article>
        <article>
          <img src={require("../img/topnutrition.jpg")} alt="" />
          <p>Top nutrition</p>
        </article>
        <article>
          <img src={require("../img/aliment.png")} alt="" />
          <p>Ken-L</p>
        </article>
      </div>
    </>
  );
};

export default Ofertas;
