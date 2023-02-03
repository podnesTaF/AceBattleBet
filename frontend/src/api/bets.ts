import {AxiosInstance} from "axios";
import {CreateBetDto} from "@/utils/types/bet";

export const BetsApi = (instance: AxiosInstance) => ({
    async create(dto: CreateBetDto) {
        const {data: {data}} = await instance.post('/bets', {data: dto});
        return data;
    },

    async getBetsByUser(id: number) {
        const {data: {data}} = await instance.get('/bets?filters[user][id][$eq]=' + id)
        const bets = data.map((bet: any) => ({
            id: bet.id,
            ...bet.attributes,
        }))
        return bets
    }
})