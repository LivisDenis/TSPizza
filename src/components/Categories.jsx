import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";

const Categories = () => {
    const {categoryId} = useSelector(state => state.filterSlice)
    const dispatch = useDispatch()
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((el, i) =>
                    <li key={i} onClick={() => dispatch(setCategoryId(i))}
                        className={categoryId === i ? 'active' : ''}>{el}</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;