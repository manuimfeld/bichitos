import React from "react";
import { Link } from "react-router-dom";

const Plantas = () => {
  return (
    <div className="card-category">
      <article>
        <Link to="/plantas/interior">
          <img
            src="https://st.depositphotos.com/1146092/1350/i/600/depositphotos_13507988-stock-photo-dog-bowl-hungry-meal-eat.jpg"
            alt=""
          />
          <p>Plantas de interior</p>
        </Link>
      </article>
      <article>
        <Link to="/plantas/exterior">
          <img
            src="https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Alimentacion-para-gatitos.jpg"
            alt=""
          />
          <p>Plantas de exterior</p>
        </Link>
      </article>
    </div>
  );
};

export default Plantas;
