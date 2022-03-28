import { useParams } from 'react-router-dom'
import { CartContext } from '../cart/CartContext'
import { useState, useEffect, useContext } from 'react'
import { LoadingContext } from '../layout/LoadingContext'

import ItemList from './ItemList'

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const { products } = useContext(CartContext)
    const { updateLoading } = useContext(LoadingContext)
    const [ category, setCategory ] = useState(categoryId)
    const [ productsFiltered, setProductsFiltered ] = useState([])

    useEffect(() => {
        updateLoading(true)
        if(category !== categoryId){
            setCategory(categoryId)
            setProductsFiltered([])
        }else if(products.length !== 0 && productsFiltered.length === 0){
            if(categoryId != undefined)
                setProductsFiltered(products.filter(e => e.categories.includes(categoryId)))
            else
                setProductsFiltered(products)
        }else if(productsFiltered.length !== 0){
            Promise.all(productsFiltered.map(e => fetch(e.thumbnail)))
                .then(() => updateLoading(false))
                .catch(() => console.log('error'))
        }
    }, [categoryId, products, productsFiltered])

    return <ItemList products={productsFiltered} />
}
export default ItemListContainer