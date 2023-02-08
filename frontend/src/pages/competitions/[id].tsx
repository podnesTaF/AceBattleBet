import React, {useEffect} from 'react';
import MainLayout from "@/layouts/MainLayout";
import axios from "axios";
import Matches from "@/components/competition/Matches/index";
import CompetitionIntro from "@/components/competition/CompetitionIntro";
import {GetServerSideProps, NextPage} from "next";
import {Api} from "@/api";
import {IMatch} from "@/utils/types/match";


interface CompetitionProps {
    competition: any,
}

const Competition: NextPage<CompetitionProps> = ({competition}) => {

    useEffect(() => {
        console.log('comp page render')
    }, []);

    return (
        <MainLayout>
            <main className='bg-black h-full'>
                <CompetitionIntro name={competition.name} description={competition.description} />
                <Matches />
            </main>
        </MainLayout>
    );
};

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    try {
        const id = ctx?.params?.id || 1
        const competition = await Api(ctx).competition.getOne(+id)
        return {
            props: {
                competition
            }
        }
    } catch (e: any) {
        console.log('match page', e.message)
        return {
            props: {}
        }
    }
}

export default Competition;
