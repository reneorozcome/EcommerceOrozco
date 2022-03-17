import { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { toast, Flip } from 'react-toastify'

const ItemDetail = ({categories, item}) => {
    const [stock, setStock] = useState(item.stock)
    const [quantity, setQuantity] = useState(0)
    const productClass = stock ? 'product detail' : 'product detail empty-stock'
    const onAdd = (quantityToAdd) => {
        setQuantity(quantityToAdd)
        setStock(stock - quantityToAdd)
        toast.success('El producto se añadió al carrito.', { theme: "colored", transition: Flip })
    }
    
    return (
        <div className={productClass}>
            <img src={item.thumbnail} alt={item.name} />
            <div className="detail">
                <h5>{item.categories.map((c) => {
                    const category = categories.find(e => e.slug == c)
                    return <Link key={category.cid} to={`/category/${category.slug}/`}>{category.name}</Link>
                }).reduce((prev, curr) => [prev, ', ', curr])}</h5>
                <h1>{item.name}</h1>
                <hr />
                <p>{item.description}</p>
                <hr />
                <h3>{'$ '+item.price.toLocaleString('es')}</h3>
                {quantity ? <Link to="/cart/" className="button">Terminar mi compra</Link> : <ItemCount stock={stock} onAdd={onAdd} />}
            </div>
        </div>
    )
}
export default ItemDetail