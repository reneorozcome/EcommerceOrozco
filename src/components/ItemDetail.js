import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { toast, Flip } from 'react-toastify'
import { useState, useContext } from 'react'

const ItemDetail = ({ item }) => {
    const [ quantity, setQuantity ] = useState(0)
    const productClass = item.stock ? '' : ' empty-stock'
    const { categories, addItem } = useContext(CartContext)
    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd)
        addItem(item, quantityToAdd)
        toast.success('El producto se añadió al carrito.', { theme: "colored", transition: Flip })
    }
    
    return (
        <div className={'product detail '+productClass}>
            <img src={item.thumbnail} alt={item.name} />
            <div className="detail">
                <h5>{item.categories?.map((c) => {
                    const category = categories.find(e => e.slug == c)
                    return <Link key={category.cid} to={`/category/${category.slug}/`}>{category.name}</Link>
                }).reduce((prev, curr) => [prev, ', ', curr])}</h5>
                <h1>{item.name}</h1>
                <hr />
                <p>{item.description}</p>
                <hr />
                <h3>{item.price?.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h3>
                {quantity ? <Link to="/cart/" className="button">Terminar mi compra</Link> : <ItemCount stock={item.stock} onAdd={onAdd} />}
            </div>
        </div>
    )
}
export default ItemDetail