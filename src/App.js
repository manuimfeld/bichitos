import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route
            path="/productos"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route
            path="/productos/:id"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route
            path="/carrito"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
