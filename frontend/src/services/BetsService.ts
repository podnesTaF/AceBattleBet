import {api} from './api'
import {ResponsePureBets} from "@/models/bets";

export const betsApi = api.injectEndpoints({
    endpoints: (build) => ({
        fetchBetsByUser: build.query<ResponsePureBets, number>({
            query: (id: number) => ({
                url: '/bets',
                params: {
                    'filters[user][id][$eq]': id,
                    sort: 'id:desc',
                    'pagination[pageSize]': 10
                }
            }),
        }),
    })
})

export const {
    useFetchBetsByUserQuery,
} = betsApi