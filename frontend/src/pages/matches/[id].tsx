import React, {useEffect, useState} from 'react';
import {GetServerSideProps, NextPage} from "next";
import {Api} from "@/api";
import {IMatch} from "@/utils/types/match";
import MainLayout from "@/layouts/MainLayout";
import MatchIntro from "@/components/match/MatchIntro";
import MatchTeamStat from "@/components/match/MatchTeamStat";
import {IBet} from "@/utils/types/bet";
import BetsWrapper from "@/components/match/BetsWrapper";
import {getSumAmount, getWinCofs, useBetsPercentage} from "@/utils/betsAlgoth";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppHooks";
import {selectTeams, setCoefficients, setSum, setTeamIds, setWidth} from "@/store/slices/betSlice";

interface MatchPageProps {
    match: IMatch;
    bets: IBet[];
}

const MatchPage: NextPage<MatchPageProps> = ({match, bets}) => {
    const dispatch = useAppDispatch();
    const teams = useAppSelector(selectTeams)
    const [currMatch, setCurrMatch] = useState<IMatch>()


    useEffect(() => {
        setCurrMatch(match)
    }, []);


    useEffect(() => {
        dispatch(setTeamIds([match.team_one.id, match.team_two.id]))
        dispatch(setSum([getSumAmount(match.team_one.id, bets), getSumAmount(match.team_two.id, bets)]))
        dispatch(setCoefficients(getWinCofs(teams[0].sum, teams[1].sum)))
        dispatch(setWidth(useBetsPercentage([teams[0].sum, teams[1].sum])))
    }, [currMatch])


    return (
        <MainLayout rightSideBarHidden={true} sideBarHidden={true}>
            <MatchIntro date={match.competition.attributes.date} teamOne={{
                name: match.team_one.attributes.name,
                country: match.team_one.attributes.country
            }} teamTwo={{
                name: match.team_two.attributes.name,
                country: match.team_two.attributes.country
            }}/>
            <div className='match__wrapper'>
                <MatchTeamStat team={match.team_one} />
                <BetsWrapper match={match} bets={bets} />
                <MatchTeamStat team={match.team_two} />
            </div>
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
