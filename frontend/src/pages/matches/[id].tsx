import React, {useEffect} from 'react';
import {GetServerSideProps, NextPage} from "next";
import {Api} from "@/api";
import {IMatch} from "@/utils/types/match";
import MainLayout from "@/layouts/MainLayout";

interface MatchPageProps {
    match: IMatch
}

const MatchPage: NextPage<MatchPageProps> = ({match}) => {
    useEffect(() => {
        console.log(match)
    }, [])
    return (
        <MainLayout>
            <h1>Match</h1>
            <div>
                {match.attributes.team_one.data.attributes.name} vs {match.attributes.team_two.data.attributes.name}
            </div>
        </MainLayout>
    )
};


export const getServerSideProps:GetServerSideProps = async (ctx) => {
    try {
        const id = ctx?.params?.id || 1
        const match = await Api(ctx).match.getFullMatch(+id)
        console.log('hereis', match)
        return {
            props: {
                match
            }
        }
    } catch (e: any) {
        console.log('match page', e.message)
        return {
            props: {}
        }
    }
}
export default MatchPage;
