import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { useState, useContext } from 'react'

const Checkout = () => {
    const [ post, setPost ] = useState({})
    const { cart, sendOrder } = useContext(CartContext)

    const updateField = (e) => setPost({...post, [e.target.name]: e.target.value})
    const sendData = (e) => {
        e.preventDefault()
        sendOrder(post)
    }

    if(cart.length === 0)
        return <div className="container">
            <p className="w-100">No hay productos en el carrito.</p>
            <Link to="/" className="button">Ir a la tienda</Link>
        </div>
    return (
        <div className="container checkout">
            <h2>Finalizar compra</h2>
            <form onSubmit={sendData}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" value={post?.name || ''} onChange={updateField} required />
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" name="email" value={post?.email || ''} onChange={updateField} required />
                </div>
                <div>
                    <label htmlFor="phone">Teléfono / Celular</label>
                    <input type="text" name="phone" value={post?.phone || ''} onChange={updateField} required />
                </div>
                <div>
                    <button className="button" type="submit">Comprar</button>
                </div>
            </form>
        </div>
    )
}
export default Checkout