import React from "react";
import AddItemCart from "../helpers/AddItemCart";
import LoadingSpinner from "./LoadingSpinner";

const Product = ({ products, cart, setCart }) => {
  const handleClick = (product) => {
    AddItemCart(product, cart, setCart);
  };

  return (
    <div className="container-products">
      {products.length === 0 ? (
        <LoadingSpinner />
      ) : (
        products.map((product) => {
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
                <button onClick={() => handleClick(product)}>Comprar</button>
              </div>
            </article>
          );
        })
      )}
    </div>
  );
};

export default Product;
