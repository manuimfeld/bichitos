import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loader-spinner">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>Cargando...</h1>
      </div>
    </>
  );
};

export default Loading;
