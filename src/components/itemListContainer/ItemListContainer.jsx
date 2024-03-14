import "./itemListContainer.css"
import {useState, useEffect} from "react"
import {getProducts} from "../../mock/api"
import ItemList from "../itemList/ItemList"
import {useParams} from "react-router-dom"
const ItemListContainer=({greeting})=>{ 
   const [productos, setProductos]=useState([])
   const {categoryId} =useParams()

   useEffect(()=>{
      getProducts()
      .then((res)=>{
         if(categoryId){
            setProductos(res.filter((productos)=>productos.category=== categoryId))
         }else{
            setProductos(res)
         }
      })
      .catch((err)=> console.log(err))
   },[categoryId])
   
   return(
      <div className="divContainer">
       {categoryId 
       ? <h1>{greeting} <span>{categoryId}</span></h1>
       : <h1>{greeting}</h1>}
      {
         productos.map((producto)=> <p key={producto.id}></p>)
      }
      <ItemList productos={productos}/>
    </div>
 )
 
}
export default ItemListContainer