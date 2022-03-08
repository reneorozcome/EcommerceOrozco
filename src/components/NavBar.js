import CartWidget from './CartWidget.js'

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
            <CartWidget />
        </>
    )
}
export default NavBar