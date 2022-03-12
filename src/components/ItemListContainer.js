import { useState, useEffect } from "react"
import ItemList from './ItemList'
import productsJson from './products'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const getProducts = () => {
        new Promise((r) => { setTimeout(() => { r() }, 2000) })
            .then(() => { setProducts(productsJson.products) })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ItemList products={products} />
    )
}
export default ItemListContainer