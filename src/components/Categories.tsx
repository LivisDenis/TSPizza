import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";
import {RootState} from "../redux/store";

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories: FC = () => {
    const {categoryId} = useSelector((state: RootState) => state.filterSlice)
    const dispatch = useDispatch()

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