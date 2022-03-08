import Item from './Item'

const ItemList = (props) => {
    return (
        <>
            { props.products.map((p) => {
                return <Item key={p.pid} name={p.name} price={p.price} img={p.thumbnail} cat={p.categories} stock={p.stock} />
            })}
        </>
    )
}
export default ItemList