const CartWidget = (prop) => {
    return (
        <div className="cart">
            <a href="#"><span className="material-icons">shopping_cart</span><span className="cart-items">5</span></a>
            {prop.children}
        </div>
    )
}
export default CartWidget