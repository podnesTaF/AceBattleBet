import {AxiosInstance} from "axios";

export const PlayerApi = (instance: AxiosInstance) => ({
    async getAll() {
        const {data} = await instance.get('/players?populate=pbs');
        return data.data;
    }
})