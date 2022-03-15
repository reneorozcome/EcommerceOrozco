import { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({categories, product}) => {
    const [stock, setStock] = useState(product.stock)
    const productClass = stock ? 'product detail' : 'product detail empty-stock'
    const onAdd = (stock) => {
        setStock(stock)
    }
    
    return (
        <div className={productClass}>
            <img src={product.thumbnail} alt={product.name} />
            <div className="detail">
                <h5>{product.categories.map((c) => {
                    const category = categories.find(e => e.slug == c)
                    return <Link key={category.cid} to={`/category/${category.slug}/`}>{category.name}</Link>
                }).reduce((prev, curr) => [prev, ', ', curr])}</h5>
                <h1>{product.name}</h1>
                <hr />
                <p>{product.description}</p>
                <hr />
                <h3>{'$ '+product.price.toLocaleString('es')}</h3>
                <ItemCount stock={stock} onAdd={onAdd} />
            </div>
        </div>
    )
}
export default ItemDetail