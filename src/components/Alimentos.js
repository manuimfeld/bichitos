import React from "react";
import { Link } from "react-router-dom";

const Alimentos = () => {
  return (
    <section className="alimentos-category">
      <div className="card-category-alimentos">
        <article>
          <Link to="/alimentos/perros">
            <img
              src="https://st.depositphotos.com/1146092/1350/i/600/depositphotos_13507988-stock-photo-dog-bowl-hungry-meal-eat.jpg"
              alt=""
            />
            <p>Perro</p>
          </Link>
        </article>
        <article>
          <Link to="/alimentos/gatos">
            <img
              src="https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Alimentacion-para-gatitos.jpg"
              alt=""
            />
            <p>Gato</p>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Alimentos;
