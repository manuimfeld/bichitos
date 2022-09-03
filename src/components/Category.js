import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <h2 className="title-section" id="category">
        Productos
      </h2>

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
      </div>
    </>
  );
};

export default Category;
