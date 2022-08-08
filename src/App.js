import { useState } from "react";
import "./App.css";
import PrincipalRouter from "./routers/PrincipalRouter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="layout">
        <PrincipalRouter cart={cart} setCart={setCart}></PrincipalRouter>
      </div>
    </>
  );
}

export default App;
