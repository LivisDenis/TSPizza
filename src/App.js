import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import './scss/app.scss';

function App() {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://634217a5ba4478d47837ddca.mockapi.io/data')
            .then(res => res.json())
            .then(res => {
                setPizzas(res)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home pizzas={pizzas} isLoading={isLoading} />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<Index />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
