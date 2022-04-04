import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './ItemListContainer'
import { ItemDetailContainer } from './ItemDetailContainer'
import ItemCount from './ItemCount'

export const Main = () => {
  return (
    <main>
      <>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/cart/"  />
          
        </Routes>
      </>
    </main>
  )
}

export default Main