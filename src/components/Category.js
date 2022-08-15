import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <h2 className="h2-title">Productos</h2>

      <div className="card-category">
        <article>
          <Link to="/alimentos">
            <img src={require("../img/aliment.png")} alt="" />
            <p>VER ALIMENTOS</p>
          </Link>
        </article>
        <article>
          <Link to="/varios">
            <img src={require("../img/img_ropas-para-perros.png")} alt="" />
            <p>VER VARIOS</p>
          </Link>
        </article>
        <article>
          <Link to="plantas">
            <img src={require("../img/plantas.png")} alt="" />
            <p>VER PLANTAS</p>
          </Link>
        </article>
        <article>
          <Link to="agroquimicos">
            <img src={require("../img/agroquim.png")} alt="" />
            <p>VER AGROQUÍMICOS</p>
          </Link>
        </article>
      </div>
    </>
  );
};

export default Category;
