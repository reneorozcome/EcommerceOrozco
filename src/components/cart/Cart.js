import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const Cart = () => {
    let _total = 0
    const { cart, removeItem, clear, sendOrder } = useContext(CartContext)

    return (
        <div className="container cart">
            <h2>Carrito de compras</h2>
            {cart.length > 0 ? 
                <>
                    <table>
                        <tbody>
                            <tr>
                                <th>Producto</th>
                                <th className="right">Precio</th>
                                <th className="right">Cantidad</th>
                                <th className="right">Total</th>
                                <th>Acciones</th>
                            </tr>
                            {cart.map((p) => {
                                _total += p.item.price * p.quantity
                                return (
                                    <tr key={p.item.id}>
                                        <td><Link to={`/item/${p.item.id}/`}>{p.item.name}</Link></td>
                                        <td className="right">{p.item.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                                        <td className="right">{p.quantity}</td>
                                        <td className="price">{(p.item.price * p.quantity).toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                                        <td className="actions"><button onClick={() => { removeItem(p.item.id) }}>Eliminar</button><Link to={`/item/${p.item.id}/`}>Ver</Link></td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <th colSpan="3">TOTAL</th>
                                <th className="right">{_total.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <button className="button" onClick={clear}>Vaciar carrito</button>
                    <button className="button" onClick={sendOrder}>Ordenar</button>
                </>
            :
                <>
                    <p>No hay productos en el carrito.</p>
                    <Link to="/" className="button">Ir a la tienda</Link>
                </>
            }
        </div>
    )
}
export default Cart