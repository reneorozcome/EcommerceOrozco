import { toast, Flip } from 'react-toastify'
import { useState, useEffect, createContext } from 'react'

export const CartContext = createContext()
const CartProvider = ({ children }) => {
    const { Provider } = CartContext
    const [ loading, setLoading ] = useState(true)
    const [ products, setProducts ] = useState([])
    const [ cartItems, setCartItems ] = useState([])
    const [ categories, setCategories ] = useState([])
    
    const clear = () => setCartItems([])
    const isInCart = (array, itemId) => array.findIndex(e => e.id == itemId)
    const removeItem = (itemId) => setCartItems(cartItems.filter(p => p.id != itemId))
    const addItem = (item, quantity) => {
        let _products = products.slice()
        let _cartItems = cartItems.slice()
        _products[isInCart(_products, item.id)].stock -= quantity
        if(isInCart(_cartItems, item.id) + 1)
        _cartItems[isInCart(_cartItems, item.id)].quantity += quantity
        else{
            _cartItems.push(item)
            _cartItems[isInCart(_cartItems, item.id)].quantity = quantity
        }
        setProducts(_products)
        setCartItems(_cartItems)
    }

    
    useEffect(() => {
        setTimeout(() => {
            fetch('/categories.json')
                .then((res) => res.json())
                .then((data) => {
                    setCategories(data)
                    return fetch('/products.json')
                })
                .catch(() => toast.error('Ocurrió un error al intentar cargar las categorías.', {theme: "colored", transition: Flip}))
                .then((res) => res.json())
                .then((data) => setProducts(data))
                .catch(() => toast.error('Ocurrió un error al intentar cargar los productos.', {theme: "colored", transition: Flip}))
                .finally(() => setLoading(false))
        }, 2000)
    }, [])

    return (
        <Provider value={{loading, categories, products, cartItems, addItem, removeItem, clear}}>
            {children}
        </Provider>
    )
}
export default CartProvider