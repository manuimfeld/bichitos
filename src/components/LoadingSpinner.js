import React from "react";
import "../styles/loading-spinner.css";

const LoadingSpinner = () => {
  return (
    <>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 className="text-loading-spinner">Cargando...</h1>
    </>
  );
};

export default LoadingSpinner;
