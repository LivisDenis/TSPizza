import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'
import {setCurrentPage} from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";

const Pagination = () => {
    const {currentPage} = useSelector(state => state.filterSlice)
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
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;