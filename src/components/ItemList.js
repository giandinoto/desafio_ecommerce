import React from 'react'
import { Link } from 'react-router-dom'


export const ItemList = ({ id, title, description, image, category }) => {

    //console.log(producto)

    return (
        <article className="itemDetail">

            <img src={image} alt={title} />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <small className="text-muted">Category: <b><u>{category}</u></b></small>
            <br />
            <Link to={`/producto/${id}`}>ver detalle</Link>
        </article>
    )
}

export default ItemList