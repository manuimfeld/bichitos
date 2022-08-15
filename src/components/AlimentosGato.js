import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ApiAlimentoGato from "../helpers/ApiAlimentoGato";
import Loading from "./Loading";

const AlimentosGato = ({ getApiGato }) => {
  const [alimentos, setAlimentos] = useState(null);
  const [raza, setRaza] = useState("Bebe");

  useEffect(() => {
    getApiGato(setAlimentos, raza);
  }, [raza]);

  const handleClick = (e) => {
    setRaza(e.currentTarget.textContent);
  };

  return (
    <>
      {alimentos === null ? (
        <Loading />
      ) : (
        <>
          <div className="options">
            <button onClick={(e) => handleClick(e)}>Bebe</button>
            <button onClick={(e) => handleClick(e)}>Adulto</button>
            <button onClick={(e) => handleClick(e)}>Urinary</button>
          </div>
          <div className="alimentos-container">
            {alimentos.map((alimento) => {
              return (
                <Card style={{ width: "18rem" }} key={alimento.id}>
                  <Card.Img
                    variant="top"
                    src={alimento.attributes.imgURL}
                    width="180"
                    height="100"
                  />
                  <Card.Body>
                    <Card.Title>{alimento.attributes.Nombre}</Card.Title>
                    <Card.Text>{alimento.attributes.Precio}</Card.Text>
                    <Card.Text>Peso: {alimento.attributes.kg}KG</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleClick(alimento)}
                    >
                      Agregar al carrito
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default AlimentosGato;
