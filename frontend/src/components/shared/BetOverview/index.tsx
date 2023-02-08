import React from 'react';
import {IPureBet} from "@/models/bets";
import styles from './BetOverview.module.css'


interface BetOverviewProps {
    bet: IPureBet;

}

const BetOverview: React.FC<BetOverviewProps> = ({bet}) => {
    return (
        <li className={styles.betItems}>
            <div className={styles.betItem}>
                <h3>Sum</h3>
                <p>{bet.attributes.sum}$</p>
            </div>
            <div className={styles.betItem}>
                <h3>Coefficient</h3>
                <p>x{bet.attributes.coefficient?.toFixed(2)}</p>
            </div>
            <div className={styles.betItem}>
                <h3>Win</h3>
                <p>{bet.attributes.possibleWin}$</p>
            </div>
        </li>
    );
};

export default BetOverview;
