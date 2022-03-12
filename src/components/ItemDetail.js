import { useState } from "react"
import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    const [stock, setStock] = useState(props.product.stock)
    const productClass = stock > 0 ? 'product detail' : 'product detail empty-stock'

    if(props.product.pid == 0)
        return <></>
    return (
        <div className={productClass}>
            <img src={props.product.thumbnail} alt={props.product.name} />
            <div className="detail">
                <h5>{props.product.categories.join(', ')}</h5>
                <h4>{props.product.name}</h4>
                <h6>{'$ '+props.product.price.toLocaleString('es')}</h6>
                <ItemCount stock={stock} setStock={setStock} />
            </div>
        </div>
    )
}
export default ItemDetail