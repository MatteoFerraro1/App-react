import Item from "../item/Item"
import "./itemList.css"
const ItemList= ({productos})=>{
    return(
        <div className="divList">
            {productos.map((producto)=><Item key={producto.id} producto={producto}/>)}
        </div>
    )
}
export default ItemList