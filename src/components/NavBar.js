import { useContext } from 'react'
import CartWidget from './CartWidget.js'
import { CartContext } from './CartContext'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    const { categories } = useContext(CartContext)
    
    return (
        <div className="container">
            <a href="#" className="nav-button"><span></span></a>
            <h1><Link to="/"><span className="material-icons">local_mall</span> eCommerce Orozco</Link></h1>
            <nav>
                <Link to="/"><span className="material-icons">home</span></Link>
                {categories.map((c) => {
                    return <NavLink key={c.cid} to={`/category/${c.slug}/`}>{c.name}</NavLink>
                })}
            </nav>
            <CartWidget />
        </div>
    )
}
export default NavBar