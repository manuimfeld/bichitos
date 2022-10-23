import React from "react";
import { useState } from "react";
import FiltersModal from "./FiltersModal";
import addFilters from "../helpers/addFilters";

const FiltersMenu = ({ filters, setFilters }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(showModal === false ? true : false);
  };

  return (
    <div className="container-filters">
      <div className="filters-menu">
        <button onClick={() => handleClick()} className="btn-filters">
          Filtrar
        </button>
        <FiltersModal
          showModal={showModal}
          setShowModal={setShowModal}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <div className="filters">
        {filters.map((filtername) => (
          <article className="filter" key={filtername}>
            <p>{filtername}</p>
            <button onClick={() => addFilters(filtername, filters, setFilters)}>
              x
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FiltersMenu;
