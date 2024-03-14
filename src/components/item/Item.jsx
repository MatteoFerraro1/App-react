import {Link} from "react-router-dom"
import "./item.css"
const Item=({producto})=>{
    return(
    <div className="card cardItem" style={{width: "18 rem"}}>
        <img src={producto.image} className="card-img-top imgCard" alt={producto.name}/>
        <div className="card-body">
            <h5 className="card-title">{producto.name}</h5>
            <p className="card-text">{producto.description}</p>
            <p className="card-text">${producto.price}</p>
            <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver más</Link>
        </div>
    </div>
    )
}
export default Item