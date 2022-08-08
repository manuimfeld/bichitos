import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ApiCall from "../helpers/ApiCall";

const AlimentosPerro = ({ cart, setCart }) => {
  const [alimentos, setAlimentos] = useState(null);
  const [raza, setRaza] = useState("Adulto raza grande");

  useEffect(() => {
    ApiCall(setAlimentos, raza);
  }, [raza]);

  const handleClick = (e) => {
    setRaza(e.currentTarget.textContent);
  };

  const handleSetCart = (e) => {
    setCart([e]);
  };

  return (
    <>
      {alimentos === null ? (
        <p>asd</p>
      ) : (
        <>
          <div className="options">
            <button onClick={(e) => handleClick(e)}>Cachorro</button>
            <button onClick={(e) => handleClick(e)}>Adulto raza grande</button>
            <button onClick={(e) => handleClick(e)}>Adulto raza pequeña</button>
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
                      onClick={() => handleSetCart(alimento)}
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

export default AlimentosPerro;
