import React, {useEffect, useState} from 'react';
import styles from './BetsWrapper.module.css'
import BetsItem from "@/components/match/BetsItem";
import {BetType, IBet} from "@/utils/types/bet";
import {IMatch} from "@/utils/types/match";
import {getWinCofs} from "@/utils/betsAlgoth";

interface BetsWrapperProps {
    match: IMatch;
    bets: IBet[]
}

const BetsWrapper: React.FC<BetsWrapperProps> = ({match, bets}) => {
    const [betsSumAmount, setBetsSumAmount] = useState({[match.team_one.id]: bets.reduce((acc, bet) => {
            if (bet.team.id === match.team_one.id && bet.type === BetType.win) {
                return acc + bet.sum
            }
            return acc
        }, 0), [match.team_two.id]: bets.reduce((acc, bet) => {
            if (bet.team.id === match.team_two.id && bet.type === BetType.win) {
                return acc + bet.sum
            }
            return acc
        }, 0)})

    const [winCofs, setWinCofs] = useState<number[]>([])
    const [width, setWidth] = useState({
[match.team_one.id]: 0,
[match.team_two.id]: 0
    })

    useEffect(() => {
        setWinCofs(getWinCofs(betsSumAmount[match.team_one.id], betsSumAmount[match.team_two.id]))
        const biggerPercentage = ((winCofs[0] / (winCofs[0] + winCofs[1])) * 100)
        const smallerPercentage = 100 - biggerPercentage
        if(betsSumAmount[match.team_one.id] > betsSumAmount[match.team_two.id]) {
            setWidth({
                [match.team_one.id]: biggerPercentage,
                [match.team_two.id]: smallerPercentage
            })
        } else {
            setWidth({
                [match.team_one.id]: smallerPercentage,
                [match.team_two.id]: biggerPercentage
            })
        }
        setWidth([biggerPercentage, smallerPercentage])
    }, [betsSumAmount])

    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <h2>Win</h2>
                <div className={styles.bets_stat}>
                    <BetsItem betSum={bet} width={width[match.team_one.id]}/>
                    <BetsItem width={width[match.team_two.id]} />
                </div>
            </div>
        </div>
    );
};

export default BetsWrapper;
