import React, {useEffect, useState} from 'react';
import styles from './BetsWrapper.module.css'
import BetsItem from "@/components/match/BetsItem";
import {IBet} from "@/utils/types/bet";
import {IMatch} from "@/utils/types/match";
import {getSumAmount, getWinCofs, useBetsPercentage} from "@/utils/betsAlgoth";
import CreateBetDialog from "@/components/match/CreateBetDialog";
interface BetsWrapperProps {
    match: IMatch;
    bets: IBet[]
}

const BetsWrapper: React.FC<BetsWrapperProps> = ({match, bets}) => {

    const [betsSumAmount, setBetsSumAmount] = useState({[match.team_one.id]: getSumAmount(match.team_one.id, bets), [match.team_two.id]: getSumAmount(match.team_two.id, bets)})

    const [winCofs, setWinCofs] = useState<number[]>(getWinCofs(betsSumAmount[match.team_one.id], betsSumAmount[match.team_two.id]))
    const [width, setWidth] = useState(useBetsPercentage(match.team_one.id, match.team_two.id, betsSumAmount))

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setBetsSumAmount({[match.team_one.id]: getSumAmount(match.team_one.id, bets), [match.team_two.id]: getSumAmount(match.team_two.id, bets)})
        // dispatch(setSum([getSumAmount(match.team_one.id, bets), getSumAmount(match.team_two.id, bets)]))
        // dispatch(setCoefficients(getWinCofs(teams[0].sum, teams[1].sum)))
        // dispatch(setWidth(useBetsPercentage([teams[0].sum, teams[1].sum])))
}, []);


    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <h2>Win</h2>
                <div onClick={() => setOpen(true)} className={styles.bets_stat}>
                    <BetsItem betCoof={winCofs[0]} betSum={betsSumAmount[match.team_one.id]} width={width[match.team_one.id]} color={'red'}/>
                    <BetsItem betCoof={winCofs[1]} betSum={betsSumAmount[match.team_two.id]} width={width[match.team_two.id]} color={'gold'} />
                </div>
            </div>
            <CreateBetDialog  matchId={match.id} open={open} setOpen={setOpen} teamOne={match.team_one} teamTwo={match.team_two} />
        </div>
    );
};

export default BetsWrapper;
