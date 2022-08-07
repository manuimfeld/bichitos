import React from 'react'

const BestSellers = () => {
  return (
    <>
    <h2 className='title-bestsellers'>Alimentos premium al mejor precio</h2>
    <div className="card-bestsellers">
    <article>
        <img src={require('../img/3-KG-GRATIS-5.png')} alt="" />
        <p>DOG SELECTION</p>
    </article>
    <article>
        <img src={require('../img/vitalcan.jpg')}alt="" />
        <p>VITALCAN</p>
    </article>
    <article>
        <img src={require('../img/catchow.jpg')}alt="" />
        <p>CAT CHOW</p>
    </article>
    <article>
        <img src={require('../img/topnutrition.jpg')}alt="" />
        <p>TOP NUTRITION</p>
    </article>
    </div>
    </>
  )
}

export default BestSellers