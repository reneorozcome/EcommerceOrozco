import { useState } from "react"

const ItemCount = (props) => {
    const [quantity, setQuantity] = useState(1)
    const addItem = () => { if(quantity < props.stock) setQuantity(quantity + 1) }
    const subItem = () => { if(quantity > 0) setQuantity(quantity - 1) }
    const addToCart = () => {
        if(props.stock - quantity >= 0)
            props.setStock(props.stock - quantity)
        setQuantity(1)
    }

    return (
        <div className="add-to-cart">
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