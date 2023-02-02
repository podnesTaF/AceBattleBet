import React, {useEffect} from 'react';
import RaceCard from "@/components/bets/RaceCard/index";
import styles from './Sidebar.module.css'
import {useMatches} from "@/hooks/useMatches";
import {getWinCofs} from "@/utils/betsAlgoth";

interface SideBarProps {
    isHidden?: boolean;
}

const content = [
    {
        name: 'Brussels vs Luxembourg',
        date: '19:00. March, 25. Netherlands',
        rate1: 1.69,
        rate2: 2.57,
        id: 1
    },
    {
        name: 'Paris vs Netherlands',
        date: '19:30. March, 25. Netherlands',
        rate1: 1.30,
        rate2: 2.75,
        id: 2
    }

]
const SideBar: React.FC<SideBarProps> = ({isHidden}) => {
    const {matches, setMatches} = useMatches()

    console.log('sidebar', matches)

    return (
        <div className={styles.sidebar} style={{display: isHidden ? 'none' : 'block'}}>
            <h2 className='text-2xl font-bold'>Closest Races</h2>
            {matches.map((item) => {
                return <RaceCard key={item.id} date={item.time} name={`${item.team_one.attributes.name} vs ${item.team_two.attributes.name}`} teamOneId={item.team_one.id} teamTwoId={item.team_two.id} bets={item.bets}/>
            })}
        </div>
    );
};

export default SideBar;