import React from 'react'


export const ItemDetail = ({ producto }) => {

    console.log(producto)

    return (
        <div className="card">
            <div className="card-body">
                <img src="https://picsum.photos/200/150" />
                <h5 className="card-title">{producto.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Unique id: {producto.id}</h6>
                 <p className="card-text">{producto.description}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Stock disponible: {producto.stock}</small>}
            </div>
        </div>
    )
}

export default ItemDetail