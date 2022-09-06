import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FiltersMenu from "./FiltersMenu";
import Product from "./Product";
import apiProducts from "../helpers/apiProducts";

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiProducts(setProducts);
  }, []);

  return (
    <section className="section-products">
      <FiltersMenu />
      <Product products={products} cart={cart} setCart={setCart} />
    </section>
  );
};

export default Products;
