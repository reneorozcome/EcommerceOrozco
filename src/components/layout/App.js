import Context from '../Context'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Cart from '../cart/Cart'
import Order from '../cart/Order'
import ItemListContainer from '../store/ItemListContainer'
import ItemDetailContainer from '../store/ItemDetailContainer'

const App = () => {
    return (
        <Context>
            <header>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/orden/:orderId" element={<Order />} />
                    <Route path="/carrito" element={<Cart />} />
                </Routes>
            </main>
            <footer>
                © Todos los derechos reservados eCommerce Orozco<br />
                con amor por reneorozco
            </footer>
            <ToastContainer position="bottom-right" />
        </Context>
    )
}
export default App