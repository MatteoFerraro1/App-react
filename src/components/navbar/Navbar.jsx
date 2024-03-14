import "./navbar.css"
import CartWidget from "../cartWidget/CartWidget"
import {NavLink} from "react-router-dom"
const Navbar = () =>{
return(
        <nav>
            <NavLink className="link" to="/">Tienda</NavLink>
            <NavLink className="link" to="/categories/viento">Viento</NavLink>
            <NavLink className="link" to="/categories/cuerda">Cuerda</NavLink>
            <NavLink className="link" to="/categories/percusion">Percusión</NavLink> 
            <CartWidget/>
        </nav>
)
}

export default Navbar