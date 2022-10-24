import React from "react";
import { useState } from "react";
import FiltersModal from "./FiltersModal";
import addFilters from "../helpers/addFilters";
import { useEffect } from "react";

const FiltersMenu = ({ filters, setFilters }) => {
  const [showModal, setShowModal] = useState(false);
  const [filterArr, setFilterArr] = useState([]);

  useEffect(() => {
    let newArr = [];
    Object.keys(filters).map((key) =>
      filters[key].forEach((val) => newArr.push({ key, val }))
    );
    setFilterArr(newArr);
  }, [filters]);

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
        {filterArr.map(({ key, val }) => (
          <article className="filter" key={val}>
            <p>{val}</p>
            <button onClick={() => addFilters(key, val, filters, setFilters)}>
              x
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FiltersMenu;
