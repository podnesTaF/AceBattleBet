import React, {useEffect} from 'react';
import styles from './RightSidebar.module.css'
import {useAppSelector} from "@/hooks/useAppHooks";
import {selectUserData} from "@/store/slices/userSlice";
import {useFetchBetsByUserQuery} from "@/services/BetsService";
import BetOverview from "@/components/shared/BetOverview";

interface RightSideBarProps {
    isHidden?: boolean;
}
const RightSideBar: React.FC<RightSideBarProps> = ({isHidden}) => {
    const me = useAppSelector(selectUserData)
    const {data, error, isLoading} = useFetchBetsByUserQuery(me!.id)

    return (
        <div className={styles.container} style={{display: isHidden ? 'none' : 'block'}}>
            <div className={`${isHidden && 'hidden'}`}>
                <h1>Your last Bets</h1>
                {isLoading && <h2>Loading...</h2>}
                {error && <h2>Enter Your account to see bets</h2>}
                {data && data.data.length ? <ul className={styles.betWrap}>
                    {
                        data.data.map(bet => (
                           <BetOverview key={bet.id} bet={bet}/>
                        ))
                    }
                </ul> : (
                    <li><h2>No bets yet</h2></li>
                    )}
            </div>
        </div>
    );
};

export default RightSideBar;