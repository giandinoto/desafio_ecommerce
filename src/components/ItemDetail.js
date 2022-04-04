import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ItemCount } from './ItemCount'


export const ItemDetail = ({ id, title, description, image, category }) => {

    const [cantidad, setCantidad] = useState(0)

    function onAdd(estado) {

        setCantidad(estado)

    }

    return (
        <section>
            <img src={image} alt={title} />
            <small className="text-muted">Category: <b><u>{category}</u></b></small>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <article>
                
                {cantidad === 0 ? (<ItemCount stock="5" onAdd={onAdd} initial={0} /> 
                
                ) : (  
                
                    <>
                        <Link to='/cart/'>Terminar mi compra</Link>

                        <button onClick={() => setCantidad(0)}>Volver a comprar</button>
                    </>

                )}
                
            </article>
           
        </section>
        
      
    )
}

export default ItemDetail