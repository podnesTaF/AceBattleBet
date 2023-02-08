import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import {Api} from "@/api";
import {ICompetition, ICompetitionsPageItem} from "@/models/competitions";
import CompetitionCard from "@/components/competition/CompetitionCard";
import MainLayout from "@/layouts/MainLayout";

interface CompetitionsPageProps {
    competitions: ICompetitionsPageItem[];
}

const CompetitionsPage: NextPage<CompetitionsPageProps> = ({competitions}) => {
    return (
        <MainLayout>
            <h1 className='title'>Competitions</h1>
            {competitions.map((comp: any) => {
                return <CompetitionCard
                    key={comp.id}
                   competition={comp}/>
            })}
        </MainLayout>
    );
};

export default CompetitionsPage;

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