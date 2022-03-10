/* eslint-disable */
import React from 'react'
import App from '../App'
import { useState }  from "react"

export const ItemCount = ({stock, initial}) => {

    let [estado, setEstado] = useState(initial)

    const onAdd = (estado) => {
        console.log(estado)
    }

    const sumarItem = () => {
        estado < stock ? ( setEstado(estado + 1) , onAdd(estado) ) : setEstado(estado = stock)  
    }

    const restarItem = () => {
        estado == 0 ? (setEstado(estado = 0) , onAdd(estado)) : setEstado(estado - 1) 
    } 

    return (
    <>
        <p>Stock disponible: {stock} unidades.</p>
        <div className='botonera'>
            <button onClick={() => sumarItem()}>+</button>
            <p className="itemCount">{estado}</p>
            <button onClick={() => restarItem()}>-</button>
         </div>
        <button>Agregar al carrito</button>  
       
        </>
    )

}

export default ItemCount