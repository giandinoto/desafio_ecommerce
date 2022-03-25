import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'

export const Navbar = () => {

  const [categorias, setCategorias] = useState([])
  const [loader, setLoader] = useState(true)

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
      .finally(() => {

        setLoader(false)
      })

  }, [])



  if (loader) {

    return (
      <>
        <h1>Loading...</h1>
      </>
    )

  } else {

    return (
        
        <Nav categorias={categorias} />
        
     
    )

  }
}
  export default Navbar