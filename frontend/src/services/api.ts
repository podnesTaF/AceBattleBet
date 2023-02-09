import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import {HYDRATE} from "next-redux-wrapper";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://abb-server-production.up.railway.app/api'
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
    baseQuery: baseQueryWithRetry,
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    tagTypes: ['Matches', 'Bets', 'Players'],
    endpoints: () => ({}),
})