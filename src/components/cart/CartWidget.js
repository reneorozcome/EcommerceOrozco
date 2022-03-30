import { Link } from 'react-router-dom'
import { useContext, memo } from 'react'
import { CartContext } from './CartContext'

const CartWidget = () => {
    const { cart, removeItem } = useContext(CartContext)

    const cartTotal = () => {
        let total = 0
        cart.map(item => total += item.quantity)
        return total
    }

    if(cartTotal() === 0)
        return null
    return (
        <div className="cart">
            <a href="#"><span className="material-icons">shopping_cart</span><span className="cart-items">{cartTotal()}</span></a>
            <div className="cart-list">
                <h2>Carrito de compras</h2>
                {cart.length > 0 ? 
                    <>
                        {cart.map((p) => {
                            return (
                                <div key={p.item.id} className="item">
                                    <button onClick={() => { removeItem(p.item.id) }}>X</button>
                                    <span>{p.item.name} ({p.quantity})</span>
                                    <h4 className="price">{p.item.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h4>
                                </div>
                            )
                        })}
                        <Link to="/carrito/" className="button">Ir al carrito</Link>
                    </>
                : <p>No hay productos en el carrito.</p>}
            </div>
        </div>
    )
}
export default memo(CartWidget)