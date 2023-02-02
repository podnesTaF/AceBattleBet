import React, {useEffect, useState} from 'react';
import styles from './BetsWrapper.module.css'
import BetsItem from "@/components/match/BetsItem";
import {BetType, IBet} from "@/utils/types/bet";
import {IMatch} from "@/utils/types/match";
import {getSumAmount, getWinCofs, useBetsPercentage} from "@/utils/betsAlgoth";

interface BetsWrapperProps {
    match: IMatch;
    bets: IBet[]
}

const BetsWrapper: React.FC<BetsWrapperProps> = ({match, bets}) => {


    const [betsSumAmount, setBetsSumAmount] = useState({[match.team_one.id]: getSumAmount(match.team_one.id, bets), [match.team_two.id]: getSumAmount(match.team_two.id, bets)})

    const [winCofs, setWinCofs] = useState<number[]>(getWinCofs(betsSumAmount[match.team_one.id], betsSumAmount[match.team_two.id]))
    const [width, setWidth] = useState(useBetsPercentage(match.team_one.id, match.team_two.id, betsSumAmount))

    useEffect(() => {
        setBetsSumAmount({[match.team_one.id]: getSumAmount(match.team_one.id, bets), [match.team_two.id]: getSumAmount(match.team_two.id, bets)})
    }, [bets]);


    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <h2>Win</h2>
                <div className={styles.bets_stat}>
                    <BetsItem betCoof={winCofs[0]} betSum={betsSumAmount[match.team_one.id]} width={width[match.team_one.id]} color={'red'}/>
                    <BetsItem betCoof={winCofs[1]} betSum={betsSumAmount[match.team_two.id]} width={width[match.team_two.id]} color={'gold'} />
                </div>
            </div>
            <div className={styles.item}>
                <h2>Difference</h2>
                <div className={styles.bets_stat}>
                    <BetsItem betCoof={winCofs[0]} betSum={betsSumAmount[match.team_one.id]} width={width[match.team_one.id]} color={'red'}/>
                    <BetsItem betCoof={winCofs[1]} betSum={betsSumAmount[match.team_two.id]} width={width[match.team_two.id]} color={'gold'} />
                </div>
            </div>
        </div>
    );
};

export default BetsWrapper;
