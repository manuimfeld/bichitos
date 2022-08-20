import React from "react";
import { Link } from "react-router-dom";

const Ofertas = () => {
  return (
    <>
      <h2 className="title-section">Alimentos en oferta</h2>
      <div className="alimentos-top-container">
        <article>
          <Link to="/alimentos/perros">
            <img src={require("../img/aliment.png")} alt="" />
            <p>Dog selection</p>
          </Link>
        </article>
        <article>
          <Link to="/alimentos/gato">
            <img src={require("../img/catchow.jpg")} alt="" />
            <p>Cat chow</p>
          </Link>
        </article>
        <article>
          <Link to="/alimentos/perro">
            <img src={require("../img/topnutrition.jpg")} alt="" />
            <p>Top nutrition</p>
          </Link>
        </article>
        <article>
          <Link to="/alimentos/perro">
            <img src={require("../img/aliment.png")} alt="" />
            <p>Ken-L</p>
          </Link>
        </article>
      </div>
    </>
  );
};

export default Ofertas;
