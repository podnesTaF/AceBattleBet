import {AxiosInstance} from "axios";
import {IBet} from "@/utils/types/bet";

export const MatchApi = (instance: AxiosInstance) => ({
    async getAll() {
        const {data: {data}} = await instance.get('/matches?populate=players');
        return data;
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

        console.log(match);

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
    }
})