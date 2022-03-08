import { useState } from "react"
import ItemCount from './ItemCount'

const Item = (props) => {
    const [stock, setStock] = useState(props.stock)
    const productClass = stock > 0 ? 'product' : 'product empty-stock'

    return (
        <div className={productClass}>
            <img src={props.img} alt={props.name} />
            <h4>{props.name}</h4>
            <h5>{props.cat.join(', ')}</h5>
            <h6>{'$ '+props.price.toLocaleString('es')}</h6>
            <ItemCount stock={stock} setStock={setStock} />
        </div>
    )
}
export default Item