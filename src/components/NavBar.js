import CartWidget from './CartWidget.js'
import ItemListContainer from './ItemListContainer'

const NavBar = () => {
    return (
        <>
            <a href="#" className="nav-button"><span></span></a>
            <h1><span className="material-icons">local_mall</span> eCommerce Orozco</h1>
            <nav>
                <a href="#"><span className="material-icons">home</span></a>
                <a href="#">Afiches</a>
                <a href="#">Figuras de acción</a>
                <a href="#">Fondos de pantalla</a>
                <a href="#">Llaveros</a>
            </nav>
            <CartWidget>
                <ItemListContainer greeting="No hay productos en tu carrito" />
            </CartWidget>
        </>
    )
}
export default NavBar