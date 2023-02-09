import React from 'react';
import styles from './Rules.module.css'

const Rules: React.FC = () => {
    return (
        <div className={styles.rules}>
            <h1>Rules</h1>
            <div className={styles.wrapper}>
                <div className={styles.rules__content}>
                    <div className={styles.text}>
                        <h3>Team competitions.</h3>
                        <p>2 teams of five athletes each go to the start of the race.</p>
                        <h3>distance - 1 mile</h3>
                        <p>The distance that has to be reached is a mile, which in numbers equals 1609 meters and 34 centimeters.</p>
                        <h3>According to the approved chip system</h3>
                        <p>
                            the time of each athlete is recorded every 200 meters, and the results in live mode are displayed on the information panels, which show the total time of each team and the difference between them in a specific time period. This allows the team to control their position and quickly start a tactical exit to remoteness.
                        </p>
                        <h3>Win</h3>
                        <p>
                            The team that shows the best combined time of all participants will win! If the teams showed the same finish time to the thousandth, the victory is won by the team whose representative crossed the finish line first.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rules;
