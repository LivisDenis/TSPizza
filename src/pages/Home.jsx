import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Index from "../components/PizzaCard";
import {Skeleton} from "../components/PizzaCard/Skeleton";
import Pagination from "../components/Pagination";
import {useSelector} from "react-redux";

const Home = ({isLoading, pizzas}) => {
    const {items} = useSelector(state => state.cartSlice)

    const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />)

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
                isLoading === 'error'
                    ? (
                        <div className="cart content__error-info">
                            <h2>Произошла ошибка <span>😕</span></h2>
                            <p>Повторите попытку немного позже :(</p>
                        </div>
                    )
                    :
                    (
                        <div className="content__items">
                            {isLoading === 'loading'
                                ? skeleton
                                : pizzas.map(pizza =>
                                    <Index key={pizza.id} items={items} {...pizza} />
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