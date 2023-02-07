import React, {useEffect} from 'react';
import styles from './RightSidebar.module.css'
import {useAppSelector} from "@/hooks/useAppHooks";
import {selectUserData} from "@/store/slices/userSlice";
import {Api} from "@/api";
import {useFetchBetsByUserQuery} from "@/services/BetsService";
import {IBet} from "@/models/bets";

interface RightSideBarProps {
    isHidden?: boolean;
}
const RightSideBar: React.FC<RightSideBarProps> = ({isHidden}) => {
    const me = useAppSelector(selectUserData)
    const {data, error, isLoading} = useFetchBetsByUserQuery(me!.id)

    return (
        <div className={styles.container} style={{display: isHidden ? 'none' : 'block'}}>
            <div className={`${isHidden && 'hidden'}`}>
                <h1>Your Recently Bets</h1>
                {isLoading && <h2>Loading...</h2>}
                {error && <h2>Enter Your account to see bets</h2>}
                {data && <ul className={styles.betWrap}>
                    {
                        data.data.map(bet => (
                            <li key={bet.id} className={styles.bet}>
                                <p>{bet.attributes.sum} points</p>
                                <p>{bet.attributes?.coefficient}</p>
                                <p>{bet.attributes?.possibleWin}</p>
                            </li>
                        ))
                    }
                </ul>}
            </div>
        </div>
    );
};

export default RightSideBar;