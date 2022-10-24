import React from "react";
import { useEffect, useState } from "react";
import FiltersMenu from "./FiltersMenu";
import Product from "./Product";
import apiProducts from "../helpers/apiProducts";

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    apiProducts(setProducts);
  }, []);

  return (
    <section className="section-products">
      <FiltersMenu filters={filters} setFilters={setFilters} />
      <Product products={products} cart={cart} setCart={setCart} />
    </section>
  );
};

export default Products;
