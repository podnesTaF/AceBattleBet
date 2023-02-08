import React from 'react';
import styles from './UserStat.module.css';
import {IBet} from "@/models/bets";

interface UserStatProps {
    bets: IBet[]
}

const UserStat: React.FC<UserStatProps> = ({bets}) => {
    const [betsSum, setBetsSum] = React.useState(bets.reduce((acc, bet) => acc + bet.sum, 0))


    return (
        <div className={styles.stats}>
            <h2>Your Statistic</h2>
            <div className={styles.content}>
                <div className={styles.item}>
                    <h4>Total bets sum:</h4>
                    <h3>{betsSum} $</h3>
                </div>
                <div className={styles.item}>
                    <h4>Wins:</h4>
                    <h3>10</h3>
                </div>
                <div className={styles.item}>
                    <h4>Bets:</h4>
                    <h3>{bets.length}</h3>
                </div>
            </div>
        </div>
    );
};

export default UserStat;
