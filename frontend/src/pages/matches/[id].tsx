import React, {useEffect, useState} from 'react';
import {GetServerSideProps, NextPage} from "next";
import {Api} from "@/api";
import {IMatch} from "@/utils/types/match";
import MainLayout from "@/layouts/MainLayout";
import MatchIntro from "@/components/match/MatchIntro";
import MatchTeamStat from "@/components/match/MatchTeamStat";
import {IBet} from "@/utils/types/bet";
import BetsWrapper from "@/components/match/BetsWrapper";
import {matchApi} from "@/services/MatchService";
import {getIMatch} from "@/utils/match";
import {useRouter} from "next/router";

interface MatchPageProps {
    match: IMatch;
    bets: IBet[];
}

const MatchPage: NextPage<MatchPageProps> = ({bets}) => {
    const router = useRouter();
    const {id} = router.query;
    if(!id) return null;
    const {data: data, error, isLoading} = matchApi.useFetchFullMatchQuery(+id);

    const [match, setMatch] = useState<IMatch>();

    useEffect(() => {
        if (data) {
            setMatch(getIMatch(data));
        }
    }, [data])

    return (
        <MainLayout rightSideBarHidden={true} sideBarHidden={true}>
            {match && !isLoading && data ? (
                   <>
                       <MatchIntro date={match.competition.attributes.date} teamOne={{
                           name: match.team_one.attributes.name,
                           country: match.team_one.attributes.country
                       }} teamTwo={{
                           name: match.team_two.attributes.name,
                           country: match.team_two.attributes.country
                       }}/>
                       <div className='match__wrapper'>
                           <MatchTeamStat team={match.team_one} />
                           <BetsWrapper data={data} bets={bets} />
                           <MatchTeamStat team={match.team_two} />
                       </div>
                   </>
            ) : (
                <div style={{color: 'white'}}>Loading...</div>
                )}
        </MainLayout>
    )
};


export const getServerSideProps:GetServerSideProps = async (ctx) => {
    try {
        const id = ctx?.params?.id || 1
        const match = await Api(ctx).match.getFullMatch(+id)
        const bets = await Api(ctx).match.getMatchBets(+id)

        return {
            props: {
                match,
                bets
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
