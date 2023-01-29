import React from "react";
import styles from './CompetitionIntro.module.css'
const CompetitionIntro = () => {
    return (
        <div className={styles.competitionPreview}>
            <div className={styles.item}>
                <h1>Ace Battle Cup Benelux</h1>
                <p>The first european Ace Battle Mile Competitions</p>
            </div>
            <div className='overlay'></div>
        </div>
    );
};

export default CompetitionIntro;
