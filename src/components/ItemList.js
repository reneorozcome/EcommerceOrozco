import Item from './Item'

const ItemList = ({categories, products}) => {
    return (
        <div className="container products">
            { products.map((p) => {
                return <Item key={p.id} product={p} categories={categories} />
            }) }
        </div>
    )
}
export default ItemList