import { useState, createContext } from 'react'

export const LoadingContext = createContext()
export const LoadingProvider = ({ children }) => {
    const { Provider } = LoadingContext
    const [ loading, setLoading ] = useState(true)
    
    const updateLoading = (load) => setLoading(load)
    
    const LoadingData = {loading, updateLoading}
    return (
        <Provider value={LoadingData}>
            <div className={`loading ${loading}`}><span className="material-icons">autorenew</span></div>
            {children}
        </Provider>
    )
}