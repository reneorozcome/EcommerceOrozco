import { Link } from 'react-router-dom'
import { toast, Flip } from 'react-toastify'
import { useState, useContext } from 'react'
import { CartContext } from '../cart/CartContext'

import ItemCount from '../store/ItemCount'

const Item = ({ item }) => {
    const [ loaded, setLoaded ] = useState(false)
    const [ quantity, setQuantity ] = useState(false)
    const enptyStock = item.stock ? '' : ' empty-stock'
    const { categories, addItem } = useContext(CartContext)
    const filteredCategories = categories.filter(c => item.categories.includes(c.slug))
    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd)
        addItem(item, quantityToAdd)
        toast.success('El producto se añadió al carrito.', { theme: "colored", transition: Flip })
    }

    return (
        <div className={'product '+enptyStock+' '+loaded}>
            <Link to={`/item/${item.id}/`}></Link>
            <img src={item.image} alt={item.name} onLoad={() => setLoaded(true)} />
            <h4>{item.name}</h4>
            <h5>{filteredCategories?.map((c) => <Link key={c.id} to={`/category/${c.slug}/`}>{c.name}</Link>).reduce((prev, curr) => [prev, ', ', curr])}</h5>
            <h6>{item.price?.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h6>
            {quantity ? <Link to="/carrito/" className="button">Terminar mi compra</Link> : <ItemCount stock={item.stock} onAdd={onAdd} />}
        </div>
    )
}
export default Item