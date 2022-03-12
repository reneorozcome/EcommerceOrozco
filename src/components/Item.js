import { useState } from "react"
import ItemCount from './ItemCount'

const Item = (props) => {
    const [stock, setStock] = useState(props.product.stock)
    const productClass = stock > 0 ? 'product' : 'product empty-stock'

    return (
        <div className={productClass}>
            <img src={props.product.thumbnail} alt={props.product.name} />
            <h4>{props.product.name}</h4>
            <h5>{props.product.categories.join(', ')}</h5>
            <h6>{'$ '+props.product.price.toLocaleString('es')}</h6>
            <ItemCount stock={stock} setStock={setStock} />
        </div>
    )
}
export default Item