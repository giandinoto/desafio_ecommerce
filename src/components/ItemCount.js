/* eslint-disable */
import React from 'react'
import App from '../App'
import { useState } from "react"
import { Link } from 'react-router-dom'

export const ItemCount = ({ stock, initial, onAdd }) => {

    let [estado, setEstado] = useState(initial)

    
    const sumarItem = () => {
        estado < stock ? (setEstado(estado + 1)) : setEstado(estado = stock)

    }

    const restarItem = () => {
        estado == 0 ? (setEstado(estado = 0)) : setEstado(estado - 1)
    }

    const handleAdd = (e) => {
        e.preventDefault()
        onAdd(estado)
    }

    return (

        <div>

            <>
                <p>Stock disponible: {stock} unidades.</p>
                <div className='botonera'>
                    <button onClick={() => sumarItem()}>+</button>
                    <p className="itemCount">{estado}</p>
                    <button onClick={() => restarItem()}>-</button>
                </div>

                <button disabled={estado === 0} onClick={handleAdd}>Agregar al carrito</button>

                

                <br />

               

            </>

        </div>
    )

}

export default ItemCount