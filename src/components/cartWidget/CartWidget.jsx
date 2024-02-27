import "./cartWidget.css"
const CartWidget = () =>{
return(
    <div>
        <img className="cartWidget" src="./images/carrito.png" alt="carrito de compras"></img>
        <span className="badge">5</span>
    </div>
)
}
export default CartWidget