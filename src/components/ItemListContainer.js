import Loading from './Loading'
import ItemList from './ItemList'
import { CartContext } from './CartContext'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const { loading, products } = useContext(CartContext)
    const [ productsFiltered, setProductsFiltered ] = useState([])

    useEffect(() => {
        if(categoryId != undefined)
            setProductsFiltered(products.filter(e => e.categories.includes(categoryId)))
        else
            setProductsFiltered(products)
    }, [loading, categoryId])

    if(loading)
        return <Loading />
    return <ItemList products={productsFiltered} />
}
export default ItemListContainer