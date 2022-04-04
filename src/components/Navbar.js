import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'

export const Navbar = () => {

  const [categorias, setCategorias] = useState([])


   useEffect(() => {

    fetch('https://fakestoreapi.com/products/categories')
      
      .then((respuesta) => {
        if (respuesta.ok) {
          //console.log("respuesta categoria ok")
          return respuesta.json()
        }

      })
      .then((respuesta) => {
        setCategorias(respuesta)
        //console.log(respuesta)
      })
      .catch(
        error => console.log(error)
      )

  }, [])


    return (
        
        <Nav categorias={categorias} />
        
     
    )


}
  export default Navbar