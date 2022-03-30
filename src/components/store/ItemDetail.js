import { Link } from 'react-router-dom'
import { toast, Flip } from 'react-toastify'
import { useState, useContext } from 'react'
import { CartContext } from '../cart/CartContext'

import ItemCount from '../store/ItemCount'

const ItemDetail = ({ item }) => {
    const [ loaded, setLoaded ] = useState(false)
    const [ quantity, setQuantity ] = useState(false)
    const enptyStock = item?.stock ? '' : ' empty-stock'
    const { categories, addItem } = useContext(CartContext)
    const filteredCategories = categories.length > 0 && item?.categories ? categories?.filter(c => item?.categories.includes(c?.slug)) : []
    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd)
        addItem(item, quantityToAdd)
        toast.success('El producto se añadió al carrito.', { theme: "colored", transition: Flip })
    }
    
    return (
        <div className={'product detail '+enptyStock+' '+loaded}>
            <img src={item?.image} alt={item?.name} onLoad={() => setLoaded(true)} />
            <div className="detail">
                <h5>{filteredCategories?.length > 0 ? filteredCategories.map((c) => <Link key={c.id} to={`/category/${c.slug}/`}>{c.name}</Link>).reduce((prev, curr) => [prev, ', ', curr]) : ''}</h5>
                <h1>{item?.name}</h1>
                <hr />
                <p>{item?.description}</p>
                <hr />
                <h3>{item?.price?.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h3>
                {quantity ? <Link to="/carrito/" className="button">Terminar mi compra</Link> : <ItemCount stock={item?.stock} onAdd={onAdd} />}
            </div>
        </div>
    )
}
export default ItemDetail