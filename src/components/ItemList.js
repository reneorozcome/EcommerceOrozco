import Item from './Item'

const ItemList = (props) => {
    return (
        <div className="products">
            { props.products.map((p) => {
                return <Item key={p.pid} product={p} />
            })}
        </div>
    )
}
export default ItemList