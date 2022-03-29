import { db } from '../Firebase'
import { useParams } from 'react-router-dom'
import { toast, Flip } from 'react-toastify'
import { doc, getDoc } from 'firebase/firestore'
import { useState, useEffect, useContext } from 'react'
import { LoadingContext } from '../layout/LoadingContext'

import ItemDetail from '../store/ItemDetail'

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [ product, setProduct ] = useState({})
    const { updateLoading } = useContext(LoadingContext)

    useEffect(() => {
        if(product?.id !== itemId){
            updateLoading(true)
            const docRef = doc(db, 'products', itemId)
            getDoc(docRef)
                .then((data) => setProduct({id: data.id, ...data.data()}))
                .catch(() => toast.error('Ocurrió un error al intentar cargar el producto.', {theme: "colored", transition: Flip}))
                .finally(() => updateLoading(false))
        }
    }, [itemId, product])

    return (
        <div className="container products-detail">
            <ItemDetail item={product} />
        </div>
    )
}
export default ItemDetailContainer