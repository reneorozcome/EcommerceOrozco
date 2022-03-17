import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const Cart = () => {
    let _total = 0
    const { cartItems, removeItem } = useContext(CartContext)

    return (
        <div className="container cart">
            <h2>Carrito de compras</h2>
            <table>
                <tr>
                    <th>Producto</th>
                    <th className="right">Precio</th>
                    <th className="right">Cantidad</th>
                    <th className="right">Total</th>
                    <th>Acciones</th>
                </tr>
                {cartItems.map((p) => {
                    _total += p.price * p.quantity
                    return (
                        <tr>
                            <td><Link to={`/item/${p.id}/`}>{p.name}</Link></td>
                            <td className="right">{p.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                            <td className="right">{p.quantity}</td>
                            <td className="price">{(p.price * p.quantity).toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                            <td className="actions"><button onClick={() => { removeItem(p.id) }}>Eliminar</button><Link to={`/item/${p.id}/`}>Ver</Link></td>
                        </tr>
                    )
                })}
                <tr>
                    <th colspan="3">TOTAL</th>
                    <th className="right">{_total.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</th>
                    <th></th>
                </tr>
            </table>
        </div>
    )
}
export default Cart