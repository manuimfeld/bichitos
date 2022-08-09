import { useState } from "react";
import "./App.css";
import PrincipalRouter from "./routers/PrincipalRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiCallPerro from "./helpers/ApiAlimentoPerro";
import ApiCallGato from "./helpers/ApiAlimentoGato";

function App() {
  const [cart, setCart] = useState([]);

  const getApiPerro = (setAlimento, raza) => {
    ApiCallPerro(setAlimento, raza);
  };

  const getApiGato = (setAlimento, raza) => {
    ApiCallGato(setAlimento, raza);
  };

  return (
    <>
      <PrincipalRouter
        cart={cart}
        setCart={setCart}
        getApiPerro={getApiPerro}
        getApiGato={getApiGato}
      ></PrincipalRouter>
    </>
  );
}

export default App;
