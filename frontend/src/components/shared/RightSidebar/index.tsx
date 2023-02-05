import React, {useEffect} from 'react';
import styles from './RightSidebar.module.css'
import {IBet} from "@/utils/types/bet";
import {useAppSelector} from "@/hooks/useAppHooks";
import {selectUserData} from "@/store/slices/userSlice";
import {Api} from "@/api";

interface RightSideBarProps {
    isHidden?: boolean;
}
const RightSideBar: React.FC<RightSideBarProps> = ({isHidden}) => {
    const me = useAppSelector(selectUserData)
    const [bets, setBets] = React.useState<IBet[]>([])

    useEffect(() => {
        (async () => {
            const userBets = await Api().bets.getBetsByUser(me!.id)
            setBets(userBets)
        })()
    }, []);


    return (
        <div className={styles.container} style={{display: isHidden ? 'none' : 'block'}}>
            <div className={`${isHidden && 'hidden'}`}>
                <h1>Your Recently Bets</h1>
                {bets ? <ul className={styles.betWrap}>
                    {
                        bets.map(bet => (
                            <li key={bet.id} className={styles.bet}>{bet.sum} points</li>
                        ))
                    }
                </ul> : <h2>Enter Your account to see bets</h2>}
            </div>
        </div>
    );
};

export default RightSideBar;