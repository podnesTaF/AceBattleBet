import React from 'react';
import {IBet} from "@/utils/types/bet";
import styles from './BetsStat.module.css'


interface BetsStatProps {
    bets: IBet[]
}

const BetsStat: React.FC<BetsStatProps> = ({bets}) => {

    console.log(bets)

    const [betsSum, setBetsSum] = React.useState(bets.reduce((acc, bet) => acc + bet.sum, 0))

    return (
        <div className={styles.bets}>
            <h3>Total bets sum: {betsSum}</h3>
        </div>
    );
};

export default BetsStat;
