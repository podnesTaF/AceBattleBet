import {api} from './api'
import {ResponsePureBets} from "@/models/bets";
import qs from 'qs';

export const betsApi = api.injectEndpoints({
    endpoints: (build) => ({
        fetchBetsByUser: build.query<ResponsePureBets, number | undefined>({
            query: (id: number) => ({
                url: '/bets',
                params: {
                    'filters[user][id][$eq]': id,
                    sort: 'id:desc',
                    'pagination[pageSize]': 8
                }
            }),
        }),
    })
})

export const {
    useFetchBetsByUserQuery,
} = betsApi