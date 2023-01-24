import React from 'react';
import RaceCard from "@/components/bets/RaceCard";

interface SideBarProps {

}

const content = [
    {
        name: 'Brussels vs Luxembourg',
        date: '19:00. March, 25. Netherlands',
        rate1: 1.69,
        rate2: 2.57
    },
    {
        name: 'Paris vs Netherlands',
        date: '19:30. March, 25. Netherlands',
        rate1: 1.30,
        rate2: 2.75
    }

]
const SideBar: React.FC<SideBarProps> = () => {
    return (
        <div className='p-5 bg-black text-white h-screen sticky top-0'>
            <h2 className='text-2xl font-bold'>Closest Races</h2>
            {content.map((item) => {
                const biggerRate = item.rate1 > item.rate2 ? item.rate1 : item.rate2
                const lowerRate = biggerRate === item.rate1 ? item.rate2 : item.rate1
               return <RaceCard date={item.date} name={item.name} biggerRate={biggerRate} lowerRate={lowerRate}/>
            })}
        </div>
    );
};

export default SideBar;
