import React from 'react';
import Image from "next/image";
import {useRouter} from "next/router";

interface CompetitionCardProps {
    name: string;
    raceCount: number;
    betsCount: number;
    teams: number;
}
const CompetitionCard: React.FC<CompetitionCardProps> = ({betsCount, raceCount, teams, name}) => {
    const router = useRouter()

    return (
        <div className='bg-white flex flex-col rounded-xl w-full items-center' onClick={() => router.push('/competitions/1')}>
            <Image src='/cup-benelux.jpg' alt='compImage' width={500} height={200} className='object-cover w-full' />
            <h2 className='text-4xl font-bold'>{name}</h2>
            <div className='flex m-8'>
                <div className='flex p-1 shadow-md rounded justify-center items-center bg-white mr-6'>
                    <h3 className='text-2xl m-3 font-bold'>{raceCount}+</h3>
                    <p>races</p>
                </div>
                <div className='flex p-1 shadow-md rounded justify-center items-center bg-yellow-500 mr-6'>
                    <h3 className='text-2xl mr-3 font-bold'>{betsCount}+</h3>
                    <p>bets</p>
                </div>
                <div className='flex p-1 shadow-md rounded justify-center items-center bg-black text-white mr-6'>
                    <h3 className='text-2xl mr-3 font-bold'>{teams}+</h3>
                    <p>teams</p>
                </div>
            </div>
        </div>
    );
};

export default CompetitionCard;
