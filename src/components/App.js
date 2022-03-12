import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'

const App = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <section>
                <ItemDetailContainer />
                <hr />
                <h4>Más productos</h4>
                <ItemListContainer greeting="No hay productos en tu carrito" />
            </section>
            <footer>
                © Todos los derechos reservados eCommerce Orozco<br />
                con amor por reneorozco
            </footer>
        </>
    )
}
export default App