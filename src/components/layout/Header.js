import { Link } from 'react-router-dom'

import Nav from './Nav.js'
import CartWidget from '../cart/CartWidget.js'

const Header = () => {
    return (
        <header className="container">
            <a href="#" className="nav-button"><span></span></a>
            <h1><Link to="/"><span className="material-icons">local_mall</span> eCommerce Orozco</Link></h1>
            <Nav />
            <CartWidget />
        </header>
    )
}
export default Header