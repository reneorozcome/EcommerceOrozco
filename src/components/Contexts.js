import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './cart/CartContext'
import { LoadingProvider } from './layout/LoadingContext'

const Context = ({ children }) => {
    return (
        <BrowserRouter basename={'/ecommerce-orozco'}>
            <LoadingProvider>
                <CartProvider>{children}</CartProvider>
            </LoadingProvider>
        </BrowserRouter>
    )
}
export default Context