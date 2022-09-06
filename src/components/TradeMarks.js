import React from "react";

const TradeMarks = ({ tradeMarks }) => {
  return (
    <section className="section-trade-marks">
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
    </section>
  );
};

export default TradeMarks;
