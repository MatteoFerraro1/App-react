import "./navbar.css"
import CartWidget from "../cartWidget/CartWidget"
const Navbar = () =>{
return(
        <nav>
            <a className="link" href="/">Tienda</a>
            <a className="link" href="/">Lo mas vendido</a>
            <a className="link" href="/">Sobre nosotros</a>
            <a className="link" href="/">Contáctanos</a> 
            <CartWidget/>
        </nav>
)
}

export default Navbar