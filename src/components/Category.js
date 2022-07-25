import React from 'react'

const Category = () => {
  return (
    <>
        <h2>Productos de vivero y demás</h2>

        <div className="card-category">
        <article>
            <img src={require('../img/aliment.png')} alt="" />
            <p>ALIMENTOS</p>
        </article>
        <article>
            <img src={require('../img/img_ropas-para-perros.png')} alt="" />
            <p>VARIOS</p>
        </article>
        <article>
            <img src={require('../img/plantas.png')} alt="" />
            <p>PLANTAS</p>
        </article>
        <article>
            <img src={require('../img/agroquim.png')} alt="" />
            <p>AGROQUÍMICOS</p>
        </article>
        </div>
    </>
  )
}

export default Category