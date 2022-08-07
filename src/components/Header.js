import React, { useState } from 'react'
import CarritoImage from '../img/carrito-de-compras.svg'
import BusquedaImage from '../img/busqueda.svg'
import BurgerMenuImage from '../img/burguer-menu.svg'
import BurgerMenu from './BurgerMenu'

const Header = () => {

  const [displayMenu, setDisplayMenu] = useState(false)

  const handleClick = () => {
    (displayMenu === false) ? setDisplayMenu(true) : setDisplayMenu(false)
  }

  return (
    <>
    <header>
      <nav>
        <ul>
          <li onClick={handleClick}>
            <img src={BurgerMenuImage} alt="" className='header-button'/>
          </li>
          <li>
            <h1>BICHITOS</h1>
          </li>
          <li>
            <img src={BusquedaImage} alt="" className='nav-button'/>
          </li>
          <li>
            <img src={CarritoImage} alt="" className='nav-button'/>
          </li>
        </ul>
      </nav>
    </header>
    { (displayMenu === false) ? (
        null
      )
      : <BurgerMenu />
    }
    </>
  )
}

export default Header