import {AxiosInstance} from "axios";

export const MatchApi = (instance: AxiosInstance) => ({
    async getAll() {
        const {data: {data}} = await instance.get('/matches?populate=players');
        return data;
    },

    async getFullMatch(id: number) {
        const {data: {data}} = await instance.get('/matches/' + id + '?populate=*,team_one.players.pbs,team_two.players.pbs');
        return data;
    }
})