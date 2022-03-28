import { toast, Flip } from 'react-toastify'
import { LoadingContext } from '../layout/LoadingContext'
import { useState, useEffect, useContext, createContext } from 'react'

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const { Provider } = CartContext
    const [ cart, setCart ] = useState([])
    const [ products, setProducts ] = useState([])
    const [ categories, setCategories ] = useState([])
    const { updateLoading } = useContext(LoadingContext)
    
    const clear = () => setCart([])
    const isInCart = (array, item) => array.some(e => e.item === item)
    const removeItem = (item) => setCart(cart.filter(p => p.item !== item))
    const addItem = (item, quantity) => {
        let _cart, _productItem
        let _cartItem = { item, quantity }
        if(isInCart(cart, item)){
            _cartItem = cart.find(p => p.item === item)
            _cartItem.quantity += quantity
            _cart = [...cart]
        }else
        _cart = [_cartItem, ...cart]
        _productItem = products.find(p => p === item)
        _productItem.stock -= quantity
        setCart(_cart)
    }
    
    useEffect(() => {
        updateLoading(true)
        setTimeout(() => {
            fetch('/categories.json')
            .then((res) => res.json())
            .then((data) => {
                console.log('change categories')
                setCategories(data)
                return fetch('/products.json')
            })
            .catch(() => toast.error('Ocurrió un error al intentar cargar las categorías.', {theme: "colored", transition: Flip}))
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch(() => toast.error('Ocurrió un error al intentar cargar los productos.', {theme: "colored", transition: Flip}))
            .finally(() => updateLoading(false))
        }, 2000)
    }, [])
    
    const cartData = {categories, products, cart, addItem, removeItem, clear}
    return (
        <Provider value={cartData}>
            {children}
        </Provider>
    )
}