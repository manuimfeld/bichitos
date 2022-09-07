import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  return (
    <section className="section-category">
      <h2>Comprá por categoría</h2>
      <div className="category">
        <article onClick={() => navigate("/productos")}>
          <img
            src="https://clublatablada.com.ar/wp-content/uploads/2019/11/Top-1.png"
            alt=""
          />
          <p>Alimentos</p>
          <button>Ver todos</button>
        </article>
        <article>
          <img
            src="https://clublatablada.com.ar/wp-content/uploads/2019/11/Top-1.png"
            alt=""
          />
          <p>Juguetes y Snacks</p>
          <button>Ver todos</button>
        </article>
        <article>
          <img
            src="https://clublatablada.com.ar/wp-content/uploads/2019/11/Top-1.png"
            alt=""
          />
          <p>Higiene</p>
          <button>Ver todos</button>
        </article>
        <article>
          <img
            src="https://clublatablada.com.ar/wp-content/uploads/2019/11/Top-1.png"
            alt=""
          />
          <p>Ropa</p>
          <button>Ver todos</button>
        </article>
      </div>
    </section>
  );
};

export default Category;
