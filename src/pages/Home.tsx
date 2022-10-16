import React, {FC, useEffect} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Index from "../components/PizzaCard";
import {Skeleton} from "../components/PizzaCard/Skeleton";
import Pagination from "../components/Pagination";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../redux/store";
import {fetchPizza} from "../redux/pizza/asyncAction";

const Home: FC = () => {
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

    const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i} />)

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} />
                <Sort sort={sort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {status === 'error'
                ? (
                    <div className="cart content__error-info">
                        <h2>Произошла ошибка <span>😕</span></h2>
                        <p>Повторите попытку немного позже :(</p>
                    </div>
                ) : (
                    <div className="content__items">
                        {status === 'loading'
                            ? skeleton
                            : items.map(item =>
                                <Index key={item.id} {...item} />
                            )
                        }
                    </div>
                )
            }
            <Pagination />
        </div>
    );
};

export default Home;