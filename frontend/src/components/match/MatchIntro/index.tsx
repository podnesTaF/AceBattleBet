import React from 'react';
import styles from './MatchIntro.module.css'

interface MatchIntroProps {
    teamOne: {
        name: string;
        country: string;
    };
    teamTwo: {
        name: string;
        country: string;
    };

    date: string;
}

const MatchIntro: React.FC<MatchIntroProps> = ({teamTwo, teamOne, date}) => {


    return (
        <section className={styles.matchIntro}>
            <div className={styles.matchIntro__teams}>
                <div className={styles.matchIntro__teams_item}>
                    <h2>{teamOne.name}</h2>
                    <p>{teamOne.country}</p>
                </div>
                <div className={styles.matchIntro__teams_item}>
                    <h2>{teamTwo.name}</h2>
                    <p>{teamTwo.country}</p>
                </div>
            </div>
            <div className={styles.matchIntro__vs}>
                <h1>VS</h1>
            </div>
            <div className={styles.matchIntro__date}>
                <p>{date.slice(0, 16).replace('T', " ")}</p>
            </div>
            {/*<div className='overlay'></div>*/}
        </section>
    );
};

export default MatchIntro;
