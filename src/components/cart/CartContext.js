import { db } from '../Firebase'
import { toast, Flip } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { LoadingContext } from '../layout/LoadingContext'
import { useState, useEffect, useContext, createContext } from 'react'
import { collection, addDoc, getDocs, serverTimestamp, writeBatch, doc, increment } from 'firebase/firestore'

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const navigate = useNavigate()
    const { Provider } = CartContext
    const [ cart, setCart ] = useState([])
    const [ categories, setCategories ] = useState([])
    const { updateLoading } = useContext(LoadingContext)
    
    const clear = () => setCart([])
    const isInCart = (array, item) => array.some(e => e.item === item)
    const removeItem = (item) => setCart(cart.filter(p => p.item !== item))
    const addItem = (item, quantity) => {
        let _cart
        let _cartItem = { item, quantity }
        if(isInCart(cart, item)){
            _cartItem = cart.find(p => p.item === item)
            _cartItem.quantity += quantity
            _cart = [...cart]
        }else
            _cart = [_cartItem, ...cart]
        setCart(_cart)
    }
    const sendOrder = () => {
        updateLoading(true)
        let _orderId
        let _total = 0
        const _orders = collection(db, 'orders')
        const _items = cart.map(p => {
            _total += p.item.price * p.quantity
            return {id: p.item.id, name: p.item.name, price: p.item.price, quantity: p.quantity}
        })
        const _order = { 
            items: _items,
            total: _total,
            date: serverTimestamp(),
            buyer: {
                name: 'René Orozco',
                phone: '3152708011',
                email: 'natosrene@gmail.com'
            }
        }
        addDoc(_orders, _order)
            .then(data => {
                _orderId = data.id
                const batch = writeBatch(db)
                _items.forEach(p => {
                    const docRef = doc(db, 'products', p.id)
                    batch.update(docRef, { stock: increment(-p.quantity) })
                })
                return batch.commit()
            }).then(() => {
                setCart([])
                toast.success('La orden se realizó correctamente.', {theme: "colored", transition: Flip})
                navigate('/orden/'+_orderId+'/')
            })
            .catch(() => toast.error('Ocurrió un error al intentar guardar la orden.', {theme: "colored", transition: Flip}))
            .finally(() => updateLoading(false))
    }
    
    useEffect(() => {
        updateLoading(true)
        const filteredQuery = collection(db, 'categories')
        getDocs(filteredQuery)
            .then((data) => { setCategories(data.docs.map(c => { return {id: c.id, ...c.data()} })) })
            .catch(() => toast.error('Ocurrió un error al intentar cargar los categorías.', {theme: "colored", transition: Flip}))
            .finally(() => updateLoading(false))
    }, [])
    
    const cartData = {categories, cart, addItem, removeItem, clear, sendOrder}
    return (
        <Provider value={cartData}>
            {children}
        </Provider>
    )
}