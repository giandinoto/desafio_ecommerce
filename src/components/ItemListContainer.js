
import React, { useEffect, useState } from 'react'
import products from '../database/products'
import { ItemList } from './ItemList'

function getProducts() {
    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(products), 2000)
    })
}

export const ItemListContainer = ({welcome}) => {

    const [items, setItems] = useState([]); 


    useEffect(() => {

        getProducts().then(function (respuestaPromesa) {

            setItems(respuestaPromesa)
        }).catch(error => console.log(error));

    }, [])
    

    return (
        <>
            <p><b>Mensaje:</b> {welcome} </p>
            <ItemList items={items} />
        </>
    )
}



export default ItemListContainer