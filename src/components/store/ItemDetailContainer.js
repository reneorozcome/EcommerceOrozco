import { useParams } from 'react-router-dom'
import { CartContext } from '../cart/CartContext'
import { useState, useEffect, useContext } from 'react'
import { LoadingContext } from '../layout/LoadingContext'

import ItemDetail from '../store/ItemDetail'

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const { products } = useContext(CartContext)
    const [ product, setProduct ] = useState({})
    const { updateLoading } = useContext(LoadingContext)

    useEffect(() => {
        updateLoading(true)
        if(product?.id !== itemId)
            setProduct(products.find(e => e?.id == itemId))
        if(product?.thumbnail){
            fetch(product.thumbnail)
                .then(() => updateLoading(false))
                .catch(() => console.log('error'))
        }
    }, [itemId, products, product])

    return (
        <div className="container products-detail">
            <ItemDetail item={product} />
        </div>
    )
}
export default ItemDetailContainer