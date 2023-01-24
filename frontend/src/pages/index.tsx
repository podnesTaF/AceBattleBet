import Head from 'next/head'
import {Inter} from '@next/font/google'
import MainLayout from "@/layouts/MainLayout";
import Image from 'next/image'
import IntroCard from "@/components/MainPage/IntroCard";
import CompetitionCard from "@/components/shared/CompetitionCard";

const inter = Inter({subsets: ['latin']})

const content = [{name: 'Explore teams', color: 'bg-white', position: 'left'} as const, {
    name: 'Explore Players',
    color: 'bg-yellow-500',
    position: 'right'
} as const, {name: 'Make your bet', color: 'bg-red-500', position: 'left'} as const]

const competitions = [
    {
        name: 'Cup Benelux',
        raceCount: 10,
        betCount: 20,
        teams: 8
    }
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Battle Bet</title>
            </Head>
            <MainLayout>
                <main className='flex flex-col bg-black'>
                    <Image src='/main-page.jpg' alt='main logo' width={905} height={400} className='object-cover h-120' />
                    <div className='main-wrap'>
                        {content.map(item => (
                            <IntroCard color={item.color} content={item.name} position={item.position} />
                        ))}
                        <div className='overlay'></div>
                    </div>
                    <div className='flex flex-col justify-center items-center m-8'>
                        <h1 className='text-4xl font-bold text-white mb-10'>Competitions</h1>
                        {competitions.map((comp) => {
                            return <CompetitionCard name={comp.name} raceCount={comp.raceCount} betsCount={comp.betCount} teams={comp.teams} />
                        })}
                    </div>
                </main>
            </MainLayout>
        </>
    )
}
