import React from 'react';
import {IBet} from "@/utils/types/bet";
import styles from './BetsStat.module.css'
import {useAppSelector} from "@/hooks/useAppHooks";
import {selectUserData} from "@/store/slices/userSlice";


interface BetsStatProps {
    bets: IBet[]
}

const BetsStat: React.FC<BetsStatProps> = ({bets}) => {

    const userData = useAppSelector(selectUserData)

    const [betsSum, setBetsSum] = React.useState(bets.reduce((acc, bet) => acc + bet.sum, 0))

    return (
        <div className={styles.bets}>
            <h3>Total bets sum: {betsSum}</h3>
            <h3>Balance: {userData?.balance}</h3>
        </div>
    );
};

export default BetsStat;
