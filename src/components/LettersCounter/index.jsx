import React, { useState } from 'react';
import styles from './LettersCounter.module.scss';

function LetterCounter() {
    const [phrase,setPhrase] = useState('');
    const [lettersCount,setLettersCount] = useState(0);
    const handleSearchInput = (e) => {
        setPhrase(e.target.value);
        setLettersCount(e.target.value.length);
    }

    return (
        <div className={`${styles.appContainer}`}>
            <div className={`${styles.appContent}`}>
                <div>
                    <h2 className={`${styles.heading}`}>
                        Calculate the Letters you enter
                    </h2>
                    <div className={`${styles.inputContainer}`}>
                        <label htmlFor="inputBox">Enter the phrase</label>
                        <input type="text" id="inputBox" placeholder='Enter the phrase' value={phrase} onChange={handleSearchInput}/>
                    </div>
                    <div className={`${styles.inputResult}`}>
                        <p>No. of letters: <span>{lettersCount}</span></p>
                    </div>
                </div>
                <div className={`${styles.imageWrapper}`}>
                    <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letters counter" />
                </div>
            </div>
        </div>
    )
}

export default LetterCounter