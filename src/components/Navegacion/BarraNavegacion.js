import React from 'react'
import {
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavBtn, 
  NavBtnLink
} from './Elementos';

import './barranavegacion.css'

const BarraNavegacion = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <img src={require('../Imagenes/Logo.png')} alt='logo' className='imagen-logo'/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            HOME
          </NavLink>
          <NavLink to="/superheroes" activeStyle>
            SUPER HÉROES
          </NavLink>
          <NavLink to="/crearyeditar" activeStyle>
            CREAR/EDITAR
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">SIGN IN</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default BarraNavegacion