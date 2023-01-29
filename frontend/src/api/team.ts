import {AxiosInstance} from "axios/index";

export const TeamApi = (instance: AxiosInstance) => ({
    async getAll() {
        const {data: {data}} = await instance.get('/teams?populate=players,players.pbs');
        return data;
    }
})