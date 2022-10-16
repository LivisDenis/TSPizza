import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {setCategoryId} from "../redux/filter/slice";

type TCategoriesProp = {
    categoryId: number
}

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories: FC<TCategoriesProp> = React.memo(({categoryId}) => {
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
});

export default Categories;