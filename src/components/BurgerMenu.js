import React from 'react'
import CarritoImage from '../img/carrito-de-compras.svg'
import AyudaImage from '../img/ayuda.svg'
import BusquedaImage from '../img/busqueda.svg'

const BurgerMenu = () => {
  return (
    <div className='burger-menu'>
        <ul>
            <li>
                <img src={CarritoImage} alt="" className='header-button'/>
                <p>SEGUÍ TU COMPRA</p>
            </li>
            <li>
                <img src={AyudaImage} alt="" className='header-button'/>
                <p>AYUDA</p>
            </li>
            <li>
                <img src={BusquedaImage} alt="" className='header-button'/>
                <p>RECIBÍ TU COMPRA</p>
                </li>
            <hr />

            <strong>CATEGORÍAS</strong>
            <br />

            <li>ALIMENTOS</li>
            <li>ACCESORIOS</li>
            <li>PLANTAS</li>
            <li>AGROQUÍMICOS</li>
        </ul>
    </div>
  )
}

export default BurgerMenu