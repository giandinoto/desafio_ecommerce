import React from 'react'
import { ItemCount } from './ItemCount'
import ItemListContainer from './ItemListContainer'

export const Main = () => {
  return (
    <main>

      {/* <ItemCount stock="5" initial={1}/> */}

      <>
        <ItemListContainer welcome="Welcome to my eCommerce"/>
      </>

    </main>
  )
}

export default Main