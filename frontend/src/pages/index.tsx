import Head from 'next/head'
import {Inter} from '@next/font/google'
import MainLayout from "@/layouts/MainLayout";
import IntroCard from "@/components/MainPage/IntroCard";
import CompetitionCard from "@/components/competition/CompetitionCard/index";
import {Api} from "@/api";
import {GetServerSideProps, NextPage} from "next";
import React, {useEffect} from "react";
import Rules from "@/components/MainPage/Rules";
import About from "@/components/MainPage/About";
import RightSideBar from "@/components/shared/RightSidebar";
import SideBar from '@/components/shared/Sidebar';

const inter = Inter({subsets: ['latin']})

const content = [{name: 'Explore teams', color: 'white', position: 'left', id: 1} as const, {
    name: 'Explore Players',
    color: '#ee342c',
    position: 'right',
    id: 2
} as const, {name: 'Make your bet', color: 'black', position: 'left', id: 3} as const]


const Home: NextPage = () => {
    const [isMobile, setIsMobile] = React.useState<boolean>()

    useEffect(() => {
        setIsMobile(window.innerWidth < 1200)
    }, []);



    return (
        <>
            <Head>
                <title>Battle Bet</title>
            </Head>
            <MainLayout>
                <main className='index-main'>
                    <div className='main-wrap'>
                        {content.map(item => (
                            <IntroCard key={item.id} color={item.color} content={item.name} position={item.position}/>
                        ))}
                    </div>
                    <About />
                    {isMobile && <SideBar />}
                    <Rules />

                </main>
            </MainLayout>
        </>
    )
}

export default Home;

