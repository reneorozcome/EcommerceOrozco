import Cart from './Cart'
import NavBar from './NavBar'
import CartContext from './CartContext'
import { ToastContainer } from 'react-toastify'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <CartContext>
            <BrowserRouter>
                <header>
                    <NavBar />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </main>
                <footer>
                    © Todos los derechos reservados eCommerce Orozco<br />
                    con amor por reneorozco
                </footer>
                <ToastContainer position="bottom-right" />
            </BrowserRouter>
        </CartContext>
    )
}
export default App