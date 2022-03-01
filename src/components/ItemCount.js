import { useState } from "react"

const ItemCount = (props) => {
    const [quantity, setQuantity] = useState(props.init)
    const productClass = props.stock > 0 ? 'product' : 'product empty-stock'
    const addItem = () => { if(quantity < props.stock) setQuantity(quantity + 1) }
    const subItem = () => { if(quantity > 0) setQuantity(quantity - 1) }
    const addToCart = () => { props.onAdd(quantity); setQuantity(1) }

    return (
        <div className={productClass}>
            <h4>{props.name}</h4>
            <p>{props.stock} en stock</p>
            <div className="control">
                <button onClick={subItem}>-</button>
                <input type="text" value={quantity} readOnly />
                <button onClick={addItem}>+</button>
            </div>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount