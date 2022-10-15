import {FC, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import './scss/app.scss';
import {useSelector} from "react-redux";
import {fetchPizza} from "./redux/slices/pizzaSlice";
import {RootState, useAppDispatch} from "./redux/store";

const App: FC = () => {
    const {items, status} = useSelector((state: RootState) => state.pizzaSlice)
    const {sort, categoryId, currentPage, searchValue} = useSelector((state: RootState) => state.filterSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const sortBy = sort.sortProperty.replace('-', '')
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
        const category = categoryId > 0 ? `&category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''

        dispatch(fetchPizza({
            sortBy,
            order,
            category,
            search,
            currentPage
        }))
    }, [categoryId, currentPage, sort, searchValue, currentPage]) // eslint-disable-line

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home pizzas={items} isLoading={status} />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<Index />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
