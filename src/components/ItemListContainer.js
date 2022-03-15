import Loading from './Loading'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast, Flip } from 'react-toastify'

const ItemListContainer = ({categories}) => {
    const { categoryId } = useParams()
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ category, setCategory ] = useState(true)

    useEffect(() => {
        if(!loading && categoryId !== category){
            setCategory(categoryId)
            setLoading(true)
        }else if(loading){
            setTimeout(() => {
                const getCategories = fetch('/products.json')
                    .then((res) => { return res.json() })
                    .then((data) => {
                        if(categoryId != undefined)
                            data = data.filter(e => e.categories.includes(categoryId))
                        setProducts(data)
                    })
                    .catch(() => { toast.error('Ocurrió un error al intentar cargar los productos.', { theme: "colored", transition: Flip }) })
                    .finally(() => { setLoading(false) })
            }, 2000)
        }
    }, [loading, categoryId])

    if(loading)
        return <Loading />
    return <ItemList categories={categories} category={category} products={products} />
}
export default ItemListContainer