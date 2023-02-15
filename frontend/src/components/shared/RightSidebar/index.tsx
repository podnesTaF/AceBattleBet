import React, {useEffect} from 'react';
import styles from './RightSidebar.module.css'
import {useAppSelector} from "@/hooks/useAppHooks";
import {selectUserData} from "@/store/slices/userSlice";
import {useFetchBetsByUserQuery} from "@/services/BetsService";
import BetOverview from "@/components/shared/BetOverview";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface RightSideBarProps {
    isHidden?: boolean;
}

const RightSideBar: React.FC<RightSideBarProps> = ({isHidden}) => {
    const me = useAppSelector(selectUserData)
    const {data, error, isLoading} = useFetchBetsByUserQuery(me?.id)
    const [isOpen, setIsOpen] = React.useState<boolean>();

    useEffect(() => {
        setIsOpen(window.innerWidth > 1200)
        console.log(isOpen)
    }, [])

    if (!me) return (
        <div className={styles.container} style={{display: isHidden ? 'none' : 'block'}}>
            <div className={`${isHidden && 'hidden'}`}>
                <h1>Your last Bets</h1>
                <h2>Enter Your account to see bets</h2>
            </div>
        </div>
    )


    return (
        <>
                <div className={styles.container} style={{display: isHidden || !isOpen ? 'none' : 'block'}}>
                    <div className={`${isHidden && 'hidden'}`}>
                        <h1>Your last Bets</h1>
                        {isLoading && <h2>Loading...</h2>}
                        {error && <h2>Error fetching your bets</h2>}
                        {!error && data?.data.length ? <ul className={styles.betWrap}>
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
            <div style={{display: isHidden ? 'none' : 'flex'}} onClick={() => setIsOpen(true)} className={styles.openBtn}>
                <ArrowBackIosIcon className={styles.icon} />
                <h3>Your last bets</h3>
            </div>
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className={styles.overlay}></div>
            )}
        </>
    );
};

export default RightSideBar;