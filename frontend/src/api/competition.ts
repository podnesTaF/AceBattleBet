import {AxiosInstance} from "axios";

export const CompetitionApi = (instance: AxiosInstance) => ({
    async getAll() {
        const {data: {data}} = await instance.get('/competitions');

        return data;
    },

    async getOne(id: number) {
        const {data: {data}} = await instance.get('/competitions/' + id);

        return {id: data.id, ...data.attributes};
    }
})