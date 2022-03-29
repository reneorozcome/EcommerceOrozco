import { db } from '../Firebase'
import { useParams } from 'react-router-dom'
import { toast, Flip } from 'react-toastify'
import { CartContext } from '../cart/CartContext'
import { useState, useEffect, useContext } from 'react'
import { LoadingContext } from '../layout/LoadingContext'
import { collection, query, where, getDocs } from 'firebase/firestore'

import ItemList from './ItemList'

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const { categories } = useContext(CartContext)
    const [ products, setProducts ] = useState([])
    const { updateLoading } = useContext(LoadingContext)
    const [ category, setCategory ] = useState(categoryId)
    
    useEffect(() => {
        if(category !== categoryId){
            setProducts([])
            setCategory(categoryId)
        }else if(categories.length > 0 && products.length === 0){
            updateLoading(true)
            const products = collection(db, 'products')
            const filter = categoryId ? where('categories', 'array-contains', categoryId) : where('name', '!=', '')
            const filteredQuery = query(products, filter)
            getDocs(filteredQuery)
                .then((data) => { setProducts(data.docs.map(d => { return {id:d.id, ...d.data()} })) })
                .catch(() => toast.error('Ocurrió un error al intentar cargar los productos.', {theme: "colored", transition: Flip}))
                .finally(() => updateLoading(false))
        }
    }, [categories, categoryId, products])

    return <ItemList products={products} />
}
export default ItemListContainer