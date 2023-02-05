import Head from 'next/head'
import {Inter} from '@next/font/google'
import MainLayout from "@/layouts/MainLayout";
import Image from 'next/image'
import IntroCard from "@/components/MainPage/IntroCard";
import CompetitionCard from "@/components/competition/CompetitionCard/index";
import {useEffect} from "react";
import {Api} from "@/api";
import {GetServerSideProps, NextPage} from "next";
import {useRouter} from "next/router";

const inter = Inter({subsets: ['latin']})

const content = [{name: 'Explore teams', color: 'white', position: 'left', id: 1} as const, {
    name: 'Explore Players',
    color: 'gold',
    position: 'right',
    id: 2
} as const, {name: 'Make your bet', color: '#ee342c', position: 'left', id: 3} as const]

interface HomeProps {
    competitions: any
}

const Home: NextPage<HomeProps> = ({competitions}) => {
    const router = useRouter()

    console.log('c', competitions)

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
                    {competitions.map((comp: any) => {
                        return <CompetitionCard
                            id={comp.id}
                            key={comp.id}
                            name={comp.name} raceCount={comp.matches} betsCount={comp.betsCount} teams={comp.teams}/>
                    })}
                </main>
            </MainLayout>
        </>
    )
}

export default Home;

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    try {
        const competitions = await Api().competition.getAll()

        return {
            props: {
                competitions
            }
        }
    } catch (err) {
        console.log('index page', err)
        return {
            props: {

            }
        }
    }
}

