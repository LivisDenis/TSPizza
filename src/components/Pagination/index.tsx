import React, {FC} from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'
import {setCurrentPage} from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const Pagination: FC = () => {
    const {currentPage} = useSelector((state: RootState) => state.filterSlice)
    const dispatch = useDispatch()

    return (
        <div className={styles.pagination}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={e => dispatch(setCurrentPage(e.selected + 1))}
                pageRangeDisplayed={5}
                forcePage={currentPage - 1}
                pageCount={3}
                previousLabel="<"
            />
        </div>
    );
};

export default Pagination;