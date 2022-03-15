import { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const Item = ({categories, product}) => {
    const [stock, setStock] = useState(product.stock)
    const productClass = stock > 0 ? '' : 'empty-stock'
    const onAdd = (stock) => {
        setStock(stock)
    }

    return (
        <div className={'product '+productClass}>
            <Link to={`/item/${product.id}/`}></Link>
            <img src={product.thumbnail} alt={product.name} />
            <h4>{product.name}</h4>
            <h5>{product.categories.map((c) => {
                const category = categories.find(e => e.slug == c)
                return <Link key={category.cid} to={`/category/${category.slug}/`}>{category.name}</Link>
            }).reduce((prev, curr) => [prev, ', ', curr])}</h5>
            <h6>{'$ '+product.price.toLocaleString('es')}</h6>
            <ItemCount stock={stock} onAdd={onAdd} />
        </div>
    )
}
export default Item