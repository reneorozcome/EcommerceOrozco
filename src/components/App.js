import NavBar from './NavBar'
import { useState, useEffect } from 'react'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import { ToastContainer, toast, Flip } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        const getCategories = fetch('/categories.json')
            .then((res) => { return res.json() })
            .then((data) => { setCategories(data) })
            .catch(() => { toast.error('Ocurrió un error al intentar cargar las categorías.', { theme: "colored", transition: Flip }) })
    }, [])

    return (
        <BrowserRouter>
            <header>
                <NavBar categories={categories} />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer categories={categories}/>} />
                    <Route path="/category/:categoryId" element={<ItemListContainer categories={categories} />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer categories={categories} />} />
                    <Route path="/cart" />
                </Routes>
            </main>
            <footer>
                © Todos los derechos reservados eCommerce Orozco<br />
                con amor por reneorozco
            </footer>
            <ToastContainer position="bottom-right" />
        </BrowserRouter>
    )
}
export default App