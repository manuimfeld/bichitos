import React from "react";
import { PRODUCT_TYPE, PET_TYPE, PET_AGE, PET_SIZE } from "../helpers/filters";
import addFilters from "../helpers/addFilters";

const FiltersModal = ({ showModal, setShowModal, filters, setFilters }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return showModal === true ? (
    <div className="modal-filters">
      <header>
        <h1 className="text-modal">Agregar filtros de busqueda</h1>
        <button onClick={() => handleClick()} className="btn-close-modal">
          x
        </button>
      </header>
      <article>
        <p>Tipo de producto</p>
        <>
          {PRODUCT_TYPE.map((type) => (
            <button
              key={type}
              onClick={(e) => addFilters("Tipo", type, filters, setFilters)}
              className={
                filters["Tipo"]?.includes(type) ? "filter-selected" : null
              }
            >
              {type}
            </button>
          ))}
        </>
      </article>
      <article>
        <p>Mascota</p>
        {PET_TYPE.map((type) => (
          <button
            key={type}
            onClick={(e) => addFilters("Animal", type, filters, setFilters)}
            className={
              filters["Animal"]?.includes(type) ? "filter-selected" : null
            }
          >
            {type}
          </button>
        ))}
      </article>
      <article>
        <p>Edad</p>
        {PET_AGE.map((age) => (
          <button
            key={age}
            onClick={(e) => addFilters("Edad", age, filters, setFilters)}
            className={
              filters["Edad"]?.includes(age) ? "filter-selected" : null
            }
          >
            {age}
          </button>
        ))}
      </article>
      <article>
        <p>Raza (perro)</p>
        {PET_SIZE.map((size) => (
          <button
            key={size}
            onClick={(e) => addFilters("Raza", size, filters, setFilters)}
            className={
              filters["Raza"]?.includes(size) ? "filter-selected" : null
            }
          >
            {size}
          </button>
        ))}
      </article>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        APLICAR FILTROS
      </button>
    </div>
  ) : null;
};

export default FiltersModal;
