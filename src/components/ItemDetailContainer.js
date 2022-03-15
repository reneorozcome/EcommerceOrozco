import Loading from './Loading'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast, Flip } from 'react-toastify'

const ItemDetailContainer = ({categories}) => {
    const { itemId } = useParams()
    const [ product, setProduct ] = useState(true)
    const [ loading, setLoading ] = useState(true)
    const [ productId, setProductId ] = useState(true)

    useEffect(() => {
        if(!loading && itemId !== productId){
            setProductId(itemId)
            setLoading(true)
        }else if(loading){
            setTimeout(() => {
                const getCategories = fetch('/products.json')
                    .then((res) => { return res.json() })
                    .then((data) => {
                        if(itemId != undefined){
                            data = data.find(e => e.id == itemId)
                            setProduct(data)
                            return true
                        }
                        return false
                    })
                    .catch(() => { toast.error('Ocurrió un error al intentar cargar los productos.', { theme: "colored", transition: Flip }) })
                    .finally(() => { setLoading(false) })
            }, 2000)
        }
    }, [loading, itemId])

    if(loading)
        return <Loading />
    return (
        <div className="container products-detail">
            <ItemDetail key={itemId} product={product} categories={categories} />
        </div>
    )
}
export default ItemDetailContainer