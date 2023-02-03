import {AxiosInstance} from "axios";
import {IBet} from "@/utils/types/bet";

export const MatchApi = (instance: AxiosInstance) => ({
    async getAll() {
        const {data: {data}} = await instance.get('/matches?populate=bets.team,team_one,team_two');

        const matches = data.map((match: any) => ({
            id: match.id,
            ...match.attributes,
            team_one: match.attributes.team_one.data,
            team_two: match.attributes.team_two.data,
            bets: [
                ...match.attributes.bets.data.map((bet: any) => ({
                    ...bet.attributes,
                    team: bet.attributes.team.data,
                }))
            ],
            time: match.attributes.time
        }))

        return matches;
    },

    async getFullMatch(id: number) {
        const {data: {data}} = await instance.get('/matches/' + id + '?populate=competition,team_one.players.pbs,team_two.players.pbs,team_one.coach,team_two.coach');

        const match = {
            id: data.id,
            ...data.attributes,
            team_one: data.attributes.team_one.data,
            team_two: data.attributes.team_two.data,
            competition: data.attributes.competition.data,
        }

        return match;
    },

    async getMatchBets(id: number) {
        const {data: {data}} = await instance.get('/matches/' + id + '?populate=bets.user,bets.team');

        const bets = data.attributes.bets.data.map((bet: any) => {
            return {
                id: bet.id,
                ...bet.attributes,
                user: bet.attributes.user.data,
                team: bet.attributes.team.data,
            }
        })
        return bets
    },

    async getMatchesByComp(id: number) {
        const {data: {data}} = await instance.get('/matches?competition=' + id + '&populate=team_one.players,team_two.players,team_one.coach,team_two.coach');

        const matches = data.map((match: any) => ({
            id: match.id,
            ...match.attributes,
            team_one: match.attributes.team_one.data,
            team_two: match.attributes.team_two.data,
        }))

        return matches;
    },
})
