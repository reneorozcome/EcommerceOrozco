import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <div className="container products">
            {products.map((p) => <Item key={p.id} item={p} />)}
        </div>
    )
}
export default ItemList