import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
