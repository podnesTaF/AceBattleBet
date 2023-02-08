import {api} from './api'
import {ResponsePureBets, UserBetsResponse} from "@/models/bets";

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
        fetchFullUserBets: build.query<UserBetsResponse, [number | undefined, number, number]>({
            query: ([id, page, rows]) => ({
                url: '/bets',
                params: {
                    "filters[user][id][$eq]": id,
                    populate: 'match,team',
                    "pagination[page]": page,
                    "pagination[pageSize]": rows
                }
            })
        })
    })
})

export const {
    useFetchBetsByUserQuery,
    useFetchFullUserBetsQuery
} = betsApi