import { useState } from "react"

const CartWidget = (props) => {
    const [state, setState] = useState(0)
    const handleClick = () => {
        setState(state + 1)
    }

    return (
        <div className="cart">
            <a href="#"><span className="material-icons">shopping_cart</span><span className="cart-items">{state}</span></a>
            {props.children}
        </div>
    )
}
export default CartWidget