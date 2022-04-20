import Contexts from '../Contexts'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Cart from '../cart/Cart'
import Order from '../cart/Order'
import Checkout from '../cart/Checkout'
import ItemListContainer from '../store/ItemListContainer'
import ItemDetailContainer from '../store/ItemDetailContainer'

const App = () => {
    return (
        <Contexts>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/orden/:orderId" element={<Order />} />
                    <Route path="/carrito" element={<Cart />} />
                    <Route path="/finalizar-compra" element={<Checkout />} />
                </Routes>
            </main>
            <footer>
                © Todos los derechos reservados eCommerce Orozco<br />
                con amor por reneorozco
            </footer>
            <ToastContainer position="bottom-right" />
        </Contexts>
    )
}
export default App