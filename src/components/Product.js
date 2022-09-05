import React from "react";

const Product = () => {
  return (
    <article>
      <img
        src="https://animall.com.ar/5651-thickbox_default/royal-canin-mini-adult-x-75-kg.webp"
        alt=""
      />
      <div className="product-info">
        <p>Royal Canin</p>
        <p>Mini adulto</p>
        <p>25kg</p>
        <p>$15.000</p>
        <button>Comprar</button>
      </div>
    </article>
  );
};

export default Product;
