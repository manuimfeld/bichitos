import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FiltersMenu from "./FiltersMenu";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const endpoint = "http://192.168.0.70:1337/api/productos?populate=*";
    axios
      .get(endpoint)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        setProducts(err);
      });
  }, []);

  return (
    <section className="section-products">
      <FiltersMenu />
      <Product products={products} />
    </section>
  );
};

export default Products;
