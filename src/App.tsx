import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import './scss/app.scss';

const App: FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<Index />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
