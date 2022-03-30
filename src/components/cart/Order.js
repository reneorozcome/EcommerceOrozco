import { db } from '../Firebase'
import { Link } from 'react-router-dom'
import { toast, Flip } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { useState, useEffect, useContext } from 'react'
import { LoadingContext } from '../layout/LoadingContext'

const Order = () => {
    const { orderId } = useParams()
    const [ order, setOrder ] = useState({})
    const { updateLoading } = useContext(LoadingContext)

    useEffect(() => {
        if(order?.id !== orderId){
            updateLoading(true)
            const docRef = doc(db, 'orders', orderId)
            getDoc(docRef)
                .then((data) => setOrder({id: data.id, ...data.data()}))
                .catch(() => toast.error('Ocurrió un error al intentar cargar la orden.', {theme: "colored", transition: Flip}))
                .finally(() => updateLoading(false))
        }
    }, [orderId, order])

    return (
        <div className="container order">
            <h2>Orden de compra</h2>
            <p>{order?.id}</p>
            <hr />
            <h4>Comprador</h4>
            <p><b>Nombre:</b> {order?.buyer?.name}</p>
            <p><b>Teléfono:</b> {order?.buyer?.phone}</p>
            <p><b>Correo electónico:</b> {order?.buyer?.email}</p>
            <hr />
            <h4>Productos</h4>
            {order?.items && order.items.length > 0 ? order?.items.map(i => (
                <p key={i.id}><b>{i.name}</b> ({i.quantity})</p>
            )) : ''}
            <p><b>Valor total:</b> {order?.total?.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
        </div>
    )
}
export default Order