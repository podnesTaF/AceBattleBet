import React, {useEffect} from 'react';
import RaceCard from "@/components/bets/RaceCard/index";
import styles from './Sidebar.module.css'
import {useMatches} from "@/hooks/useMatches";
import Link from "next/link";

interface SideBarProps {
    isHidden?: boolean;
}

const competitions = [
    "Ace Battle Benelux",
    "Ace Battle Mile International",
]

const SideBar: React.FC<SideBarProps> = ({isHidden}) => {
    const {matches, setMatches} = useMatches()

    return (
        <div className={styles.sidebar} style={{display: isHidden ? 'none' : 'block'}}>
            <div className={styles.competitions}>
                <h2>
                    Top Competitions
                </h2>
                {competitions.map((competition, index) => (
                 <h3 key={index}>
                        {competition}
                 </h3>
                ))}
                <Link href={'/competitions'}>
                    See more
                </Link>
            </div>
            <div className={styles.races}>
                <div className={styles.racesItems}>
                    <h2>Closest Races</h2>
                    {matches.map((item) => {
                        return <RaceCard matchId={item.id} key={item.id} date={item.time.replace('T', ' ').slice(0, -8)} team_one={item.team_one.attributes.name} team_two={item.team_two.attributes.name} teamOneId={item.team_one.id} teamTwoId={item.team_two.id} bets={item.bets}/>
                    })}
                </div>
                <div className={styles.overlay}></div>
            </div>
        </div>
    );
};

export default SideBar;