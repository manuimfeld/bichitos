import { useState } from "react";
import "./App.css";
import PrincipalRouter from "./routers/PrincipalRouter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <PrincipalRouter cart={cart} setCart={setCart}></PrincipalRouter>
    </>
  );
}

export default App;
