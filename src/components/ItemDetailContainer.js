import React, { useEffect, useState } from 'react'
import { product } from '../database/product'
import { ItemDetail } from './ItemDetail'

function getProducto() {

    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(product), 2000)
        
    })
}

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});

    useEffect(() => {

        getProducto().then(function (respuestaPromesa) {

            setProducto(respuestaPromesa)

        }).catch(error => console.log(error));

    }, [])


    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer