import React from 'react'
import {Navbar} from './Navbar.js'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="App-header">
         <Link to="/">
           <h1>My eCommerce</h1>
         </Link>
        
        <>
           <Navbar />
        </>

        <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>

    </header>
  )
}


export default Header 