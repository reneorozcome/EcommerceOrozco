import { useState } from 'react'
import { Link } from 'react-router-dom'

import NavBar from './NavBar.js'
import CartWidget from '../cart/CartWidget.js'

const Header = () => {
    const [ menu, setMenu ] = useState(false)

    const toggleMenu = () => {
        console.log(menu)
        setMenu(!menu)
    }

    console.log(menu)

    return (
        <header>
            <div className="container">
                <button onClick={toggleMenu} className="nav-button"><span></span></button>
                <h1><Link to="/"><span className="material-icons">local_mall</span> eCommerce Orozco</Link></h1>
                <NavBar menu={menu} />
                <CartWidget />
            </div>
        </header>
    )
}
export default Header