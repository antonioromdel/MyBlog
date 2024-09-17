import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className="nav">
            <ul className="nav__ul">
                <li className="links"><NavLink to="/inicio">Inicio</NavLink></li>
                <li className="links"><NavLink to="/articulos">Artículos</NavLink></li>
                <li className="links"><NavLink to="/crear-articulo">Crear Artículos</NavLink></li>
                <li className="links"><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
    </nav>
    </>
  )
}

export default Nav
