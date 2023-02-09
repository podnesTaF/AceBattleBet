import {AxiosInstance} from "axios";
import {ResponseCompNames} from "@/models/competitions";

export const CompetitionApi = (instance: AxiosInstance) => ({
    async getAll() {
        const {data: {data}} = await instance.get('/competitions?populate=matches.bets,image');

        const competitions = data.map((competition: any) => {

            let bets = 0;

            competition.attributes.matches.data.forEach((match: any) => {
                bets += match.attributes.bets.data.length;
            })

            return {
                id: competition.id,
                ...competition.attributes,
                matches: competition.attributes.matches.data.length,
                betsCount: bets,
                teams: competition.attributes.matches.data.length * 2
            }
        })

        return competitions;
    },

    async getOne(id: number) {
        const {data: {data}} = await instance.get('/competitions/' + id + "?populate=image");

        return {id: data.id, ...data.attributes};
    },
    async getCompNames() {
        const {data: {data}} = await instance.get<ResponseCompNames>('/competitions?fields=name');
        return data
    }
})