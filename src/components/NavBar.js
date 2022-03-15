import CartWidget from './CartWidget.js'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({categories}) => {
    return (
        <div className="container">
            <a href="#" className="nav-button"><span></span></a>
            <h1><Link to="/"><span className="material-icons">local_mall</span> eCommerce Orozco</Link></h1>
            <nav>
                <Link to="/"><span className="material-icons">home</span></Link>
                { categories.map((c) => {
                    return <NavLink key={c.cid} to={`/category/${c.slug}/`}>{c.name}</NavLink>
                }) }
            </nav>
            <CartWidget />
        </div>
    )
}
export default NavBar