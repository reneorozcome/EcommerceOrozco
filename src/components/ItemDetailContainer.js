import Loading from './Loading'
import ItemDetail from './ItemDetail'
import { CartContext } from './CartContext'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [ product, setProduct ] = useState({})
    const { loading, products } = useContext(CartContext)

    useEffect(() => {
        setProduct(products.find(e => e?.id == itemId))
    }, [itemId, products])

    if(loading)
        return <Loading />
    return (
        <div className="container products-detail">
            <ItemDetail item={product} />
        </div>
    )
}
export default ItemDetailContainer