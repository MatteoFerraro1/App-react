import React, { useEffect } from 'react'
import {useState,} from "react"
import { getOneProduct } from '../../mock/api'
import ItemDetail from '../itemDetail/ItemDetail'
import {useParams} from "react-router-dom"
import "./itemDetailContainer.css"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading]= useState(false)
    const {itemId} = useParams()
    useEffect(()=>{
      setLoading(true)
        getOneProduct(itemId)
        .then((res)=>setProducto(res))
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
    },[])
    if(loading){
      return <div style={{display:"flex", flexDirection:"column",alignItems:"center" }}> 
                  <h1>Cargando producto...</h1>
            </div>
   }
  return (
    <div className='divDetailContainer'>
       <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
