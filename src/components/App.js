import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'

const App = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <section>
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