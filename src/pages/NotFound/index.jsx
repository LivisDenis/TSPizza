import React from 'react';
import styles from "./NotFound.module.scss";

const NotFound = () => {
    return (
        <div className="container">
            <div className={styles.root}>
                <span>😕</span>
                <br/>
                <h2>Страница не найдена :(</h2>
            </div>
        </div>
    );
};

export default NotFound;