import Head from 'next/head'
import {Inter} from '@next/font/google'
import MainLayout from "@/layouts/MainLayout";
import Image from 'next/image'
import IntroCard from "@/components/MainPage/IntroCard";
import CompetitionCard from "@/components/competition/CompetitionCard/index";
import {useEffect} from "react";
import {Api} from "@/api";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

const content = [{name: 'Explore teams', color: 'white', position: 'left', id: 1} as const, {
    name: 'Explore Players',
    color: 'gold',
    position: 'right',
    id: 2
} as const, {name: 'Make your bet', color: '#ee342c', position: 'left', id: 3} as const]

const competitions = [
    {
        name: 'Cup Benelux',
        raceCount: 10,
        betCount: 20,
        teams: 8,
        id: 1
    }
]

export default function Home() {

    useEffect(() => {
        (async () => {
           try {
               const data = await Api().team.getAll()
               console.log(data)
           } catch (err) {
                console.log(err)
           }
        })()
    }, [])

    return (
        <>
            <Head>
                <title>Battle Bet</title>
            </Head>
            <MainLayout>
                <main className='index-main'>
                    <Image src='/main-page.jpg' alt='main logo' width={905} height={500} className='main-img'/>
                    <div className='main-wrap'>
                        {content.map(item => (
                            <IntroCard key={item.id} color={item.color} content={item.name} position={item.position}/>
                        ))}
                    </div>
                    <h1>Competitions</h1>
                    {competitions.map((comp) => {
                        return <CompetitionCard
                            key={comp.id}
                            name={comp.name} raceCount={comp.raceCount} betsCount={comp.betCount} teams={comp.teams}/>
                    })}
                </main>
            </MainLayout>
        </>
    )
}
