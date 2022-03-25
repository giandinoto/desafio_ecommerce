import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = ({categorias}) => {

    
    return (
        <nav className='nav'>
           
           {categorias.map((categoria) => {
                return  <NavLink key={categoria} to={`/categoria/${categoria}`}  className='nav__link'>{categoria}</NavLink>
            })}
        </nav>
    )
}

export default Nav