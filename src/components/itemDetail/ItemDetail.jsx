import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import "./itemDetail.css"
const ItemDetail = ({producto}) => {
  return (
    <div className='divDetail'>
      <h3>Detalle de: {producto.name}</h3>
      <img className="imgDetail" src={`../images/${producto.name}.png`} alt={producto.name}/>
      <p className="counter">$ {producto.price}</p>
      <ItemCount  stock={producto.stock}/>
    </div>
  )
}

export default ItemDetail
