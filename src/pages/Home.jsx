import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Index from "../components/PizzaCard";
import {Skeleton} from "../components/PizzaCard/Skeleton";
import Pagination from "../components/Pagination";
import {useSelector} from "react-redux";

const Home = ({isLoading, pizzas}) => {
    const {items} = useSelector(state => state.cartSlice)

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                    ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
                    : pizzas.map(pizza =>
                        <Index key={pizza.id} items={items} {...pizza} />
                    )
                }
            </div>
            <Pagination />
        </div>
    );
};

export default Home;