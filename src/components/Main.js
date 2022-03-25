import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './ItemListContainer'
import { ItemDetailContainer } from './ItemDetailContainer'

export const Main = () => {
  return (
    <main>
      <>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
        </Routes>
      </>
    </main>
  )
}

export default Main