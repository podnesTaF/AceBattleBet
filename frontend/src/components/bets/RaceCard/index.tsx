import React, {useEffect, useState} from 'react';
import styles from './RaceCard.module.css';
import {IBet} from "@/utils/types/bet";
import {getSumAmount, getWinCofs, useBetsPercentage} from "@/utils/betsAlgoth";
import {useRouter} from "next/router";

interface RaceCardProps {
    date: string,
    name: string,
    bets: IBet[];
    teamOneId: number;
    teamTwoId: number;
    matchId: number;
}

const RaceCard: React.FC<RaceCardProps> = ({matchId, date, name, bets, teamTwoId, teamOneId}) => {
    const [sumAmount, setSumAmount] = useState({[teamOneId]: getSumAmount(teamOneId, bets), [teamTwoId]: getSumAmount(teamTwoId, bets)})

    const [winCofs, setWinCofs] = useState(getWinCofs(sumAmount[teamOneId], sumAmount[teamTwoId]))

    const percentages = useBetsPercentage(teamOneId, teamTwoId, sumAmount)

    const router = useRouter()

    return (
        <div className={styles.raceCard} onClick={() => router.push(`/matches/${matchId}`)}>
            <h3 className='text-xl'>{name}</h3>
            <div>
                <p>Date:</p>
                <div className={styles.date}>
                    <p>{date}</p>
                </div>
            </div>
            <div className={styles.rate}>
                <p>Win:</p>
                <div className={styles.rateItem}>
                    <div className={styles.part} style={{width: `${percentages[teamOneId]}%`, backgroundColor: 'red'}}>
                        <p>{winCofs[0].toFixed(2)}</p>
                    </div>
                    <div className={styles.part} style={{width: `${percentages[teamTwoId]}%`, backgroundColor:'gold'}}>
                        <p>{winCofs[1].toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RaceCard;