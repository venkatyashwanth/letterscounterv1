import React from 'react';
import styles from './Withdrawbtn.module.scss';

function Withdrawbtn({ value, withdrawAmnt }) {
    const handleValue = () => {
        withdrawAmnt(value)
    }
    return (
        <li className={styles.btnElement}>
            <button onClick={handleValue}>{value}</button>
        </li>
    )
}

export default Withdrawbtn