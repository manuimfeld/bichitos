import React from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const TradeMarks = ({ tradeMarks }) => {
  const navigate = useNavigate();

  return (
    <section className="section-trade-marks">
      {tradeMarks.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1>Seleccioná tu marca</h1>
          <div className="trade-marks">
            {tradeMarks.map((marks) => {
              return (
                <article key={marks.id} onClick={() => navigate("/productos")}>
                  <img
                    src={`http://192.168.0.70:1337${marks.attributes.Imagen.data.attributes.url}`}
                    alt=""
                  />
                </article>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default TradeMarks;
