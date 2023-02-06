import React, {useEffect} from 'react';
import RaceCard from "@/components/bets/RaceCard/index";
import styles from './Sidebar.module.css'
import {useMatches} from "@/hooks/useMatches";

interface SideBarProps {
    isHidden?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({isHidden}) => {
    const {matches, setMatches} = useMatches()

    return (
        <div className={styles.sidebar} style={{display: isHidden ? 'none' : 'block'}}>
            <h2 className='text-2xl font-bold'>Closest Races</h2>
            {matches.map((item) => {
                return <RaceCard matchId={item.id} key={item.id} date={item.time.replace('T', ' ').slice(0, -8)} name={`${item.team_one.attributes.name} vs ${item.team_two.attributes.name}`} teamOneId={item.team_one.id} teamTwoId={item.team_two.id} bets={item.bets}/>
            })}
        </div>
    );
};

export default SideBar;