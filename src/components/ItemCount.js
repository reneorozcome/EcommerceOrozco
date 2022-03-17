import { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [quantity, setQuantity] = useState(1)
    const addItem = () => { if(quantity < stock) setQuantity(quantity + 1) }
    const subItem = () => { if(quantity > 0) setQuantity(quantity - 1) }
    const addToCart = () => {
        onAdd(quantity)
        setQuantity(1)
    }

    return (
        <div className="add-to-cart">
            <p>{stock} en stock</p>
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