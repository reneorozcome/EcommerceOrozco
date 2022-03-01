import { useState } from "react"
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    const [stock, setStock] = useState(8)
    const addToCart = (added) => {
        if(stock - added >= 0)
            setStock(stock - added)
    }

    return (
        <div className="cart-list">
            <ItemCount name="Producto 1" stock={stock} init={1} onAdd={addToCart} />
        </div>
    )
}
export default ItemListContainer