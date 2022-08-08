import React from "react";

const AlimentosTop = () => {
  return (
    <>
      <h2 className="h2-title">Variedades de marcas</h2>
      <div className="alimentos-top-container">
        <article>
          <img src={require("../img/aliment.png")} alt="" />
          <p>Dog selection</p>
        </article>
        <article>
          <img src={require("../img/catchow.jpg")} alt="" />
          <p>Catchow</p>
        </article>
        <article>
          <img src={require("../img/topnutrition.jpg")} alt="" />
          <p>Top nutrition</p>
        </article>
        <article>
          <img src={require("../img/aliment.png")} alt="" />
          <p>Dog selection</p>
        </article>
      </div>
    </>
  );
};

export default AlimentosTop;
