import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import productsJson from './products'

const ItemListContainer = () => {
    const [product, setProduct] = useState({pid: 0})
    const getItem = (item) => {
        new Promise((r) => { setTimeout(() => { r() }, 2000) })
            .then(() => { setProduct(productsJson.products[item]) })
    }

    useEffect(() => {
        getItem(0)
    }, [])

    return (
        <div className="products">
            <ItemDetail key={product.pid} product={product} />
        </div>
    )
}
export default ItemListContainer