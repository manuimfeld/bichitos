import React from "react";

const Product = ({ products }) => {
  return (
    <div className="container-products">
      {products.map((product) => {
        return (
          <article key={product.id}>
            <img
              src={`http://192.168.0.70:1337${product.attributes.Imagen.data.attributes.url}`}
              alt=""
            />
            <div className="product-info">
              <p>{product.attributes.marca.data.attributes.Nombre}</p>
              <p>{product.attributes.Nombre}</p>
              <p>{product.attributes.Kg} KG</p>
              <p>${product.attributes.Precio}</p>
              <button>Comprar</button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Product;
