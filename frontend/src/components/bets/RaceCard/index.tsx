import React, {useEffect, useState} from 'react';
import styles from './RaceCard.module.css';
import {IBet} from "@/utils/types/bet";
import {getSumAmount, getWinCofs, useBetsPercentage} from "@/utils/betsAlgoth";
import {useRouter} from "next/router";

interface RaceCardProps {
    date: string,
    bets: IBet[];
    team_one: string;
    team_two: string;
    teamOneId: number;
    teamTwoId: number;
    matchId: number;
}

const RaceCard: React.FC<RaceCardProps> = ({matchId, date, team_one, team_two, bets, teamTwoId, teamOneId}) => {
    const [sumAmount, setSumAmount] = useState([getSumAmount(teamOneId, bets), getSumAmount(teamTwoId, bets)])

    const [winCofs, setWinCofs] = useState(getWinCofs(sumAmount[0], sumAmount[1]))

    const percentages = useBetsPercentage(sumAmount)

    const router = useRouter()

    return (
        <div className={styles.raceCard} onClick={() => router.push(`/matches/${matchId}`)}>
            <div className={styles.intro}>
                <div className={styles.name}>
                    <h3>{team_one}</h3>
                    <h3>{team_two}</h3>
                </div>
                <div className={styles.dateWrap}>
                    <h4>{date.slice(0,10)}</h4>
                    <h4> {date.slice(11)}</h4>
                </div>
            </div>
            <div className={styles.rate}>
                <div className={styles.rateItem}>
                    <div className={styles.part} style={{width: `${percentages[1]}%`, backgroundColor: 'red'}}>
                        <p>{winCofs[0].toFixed(2)}</p>
                    </div>
                    <div className={styles.part} style={{width: `${percentages[0]}%`, backgroundColor:'white',border: "1px solid black"}}>
                        <p>{winCofs[1].toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RaceCard;