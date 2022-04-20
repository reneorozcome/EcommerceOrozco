import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../cart/CartContext'

const NavBar = ({ menu }) => {
    const { categories } = useContext(CartContext)
    
    return (
        <nav className={menu && 'in' || ''}>
            <Link to="/"><span className="material-icons">home</span></Link>
            {categories.map((c) => {
                return <NavLink key={c.id} to={`/category/${c.slug}/`}>{c.name}</NavLink>
            })}
        </nav>
    )
}
export default NavBar