import {AxiosInstance} from "axios";

export const PlayerApi = (instance: AxiosInstance) => ({
    async getAll() {
        const {data} = await instance.get('/players?populate=pbs,team,team.coach');
        return data.data;
    }
})