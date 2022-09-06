import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const TradeMarks = ({ tradeMarks }) => {
  return (
    <section className="section-trade-marks">
      {tradeMarks.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <p>Seleccioná tu marca</p>
          <div className="trade-marks">
            {tradeMarks.map((marks) => {
              return (
                <article key={marks.id}>
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
