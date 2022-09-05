import React from "react";
import { useEffect } from "react";
import FiltersMenu from "./FiltersMenu";
import Product from "./Product";

const Products = () => {
  return (
    <section className="section-products">
      <FiltersMenu />
      <div className="container-products">
        <Product />
      </div>
    </section>
  );
};

export default Products;
