import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Alimentos from "../components/Alimentos";
import AlimentosPerro from "../components/AlimentosPerro";
import AlimentosGato from "../components/AlimentosGato";
import Varios from "../components/Varios";
import Cart from "../pages/Cart";

const PrincipalRouter = ({ cart, setCart }) => {
  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route
            path="/alimentos/perros"
            element={<AlimentosPerro cart={cart} setCart={setCart} />}
          />
          <Route
            path="/alimentos/gatos"
            element={<AlimentosGato cart={cart} setCart={setCart} />}
          />
          <Route path="/varios" element={<Varios />} />
          <Route
            path="/carrito"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PrincipalRouter;
