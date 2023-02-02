import {GetServerSidePropsContext, NextPageContext} from 'next';
import Cookies, {parseCookies} from 'nookies';
import {UserApi} from './user';
import axios from 'axios';
import {TeamApi} from "@/api/team";
import {PlayerApi} from "@/api/players";
import {MatchApi} from "@/api/match";
import {CompetitionApi} from "@/api/competition";

interface ApiReturnType {
    user: ReturnType<typeof UserApi>;
    team: ReturnType<typeof TeamApi>
    player: ReturnType<typeof PlayerApi>
    match: ReturnType<typeof MatchApi>

    competition: ReturnType<typeof CompetitionApi>
}

export const Api = (
    ctx?: NextPageContext | GetServerSidePropsContext
): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies();
    console.log(cookies)
    const token = cookies.authToken;

    console.log(token)

    const headers = token ? {Authorization: 'Bearer ' + token} : {}

    const instance = axios.create({
        baseURL: 'http://localhost:1337/api',
        headers,
    });

    return {
        user: UserApi(instance),
        team: TeamApi(instance),
        player: PlayerApi(instance),
        match: MatchApi(instance),
        competition: CompetitionApi(instance)
    };

};