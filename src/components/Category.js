import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <h2 className="h2-title">Productos de vivero y demás</h2>

      <div className="card-category">
        <article>
          <Link to="/alimentos">
            <img src={require("../img/aliment.png")} alt="" />
            <p>ALIMENTOS</p>
          </Link>
        </article>
        <article>
          <Link to="/varios">
            <img src={require("../img/img_ropas-para-perros.png")} alt="" />
            <p>VARIOS</p>
          </Link>
        </article>
        <article>
          <Link to="plantas">
            <img src={require("../img/plantas.png")} alt="" />
            <p>PLANTAS</p>
          </Link>
        </article>
        <article>
          <Link to="agroquimicos">
            <img src={require("../img/agroquim.png")} alt="" />
            <p>AGROQUÍMICOS</p>
          </Link>
        </article>
      </div>
    </>
  );
};

export default Category;
