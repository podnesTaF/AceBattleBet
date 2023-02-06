import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


export const matchApi = createApi({
    reducerPath: 'matchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api',
    }),
    endpoints: (builder) => ({
        getMatches: builder.query({
            query: (id: number) => ({
                url: '/matches'
            }),
        })
    })
})