import React from "react";
import { useEffect } from "react";

const FiltersMenu = () => {
  return (
    <div className="container-filters">
      <div className="filters-menu">
        <p>Filtrar</p>
      </div>
      <div className="filters">
        <div className="filter">
          <p>Royal Cannin</p>
          <button>x</button>
        </div>
        <div className="filter">
          <p>Perro</p>
          <button>x</button>
        </div>
        <div className="filter">
          <p>Adulto</p>
          <button>x</button>
        </div>
        <div className="filter">
          <p>Raza pequeña</p>
          <button>x</button>
        </div>
      </div>
    </div>
  );
};

export default FiltersMenu;
