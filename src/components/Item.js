import React from 'react'

export const Item = ({ id, title, description,stock }) => {

  return (


    <div className="card">
      <div className="card-body">
         <img src="https://picsum.photos/200/150" /> 
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Unique id: {id}</h6>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Stock disponible: {stock}</small>
      </div>
    </div>

  )
}

export default Item;