import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ResponseFullMatch} from "@/models/match";
import {HYDRATE} from "next-redux-wrapper";


export const matchApi = createApi({
    reducerPath: 'matchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api',
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        fetchFullMatch: build.query<ResponseFullMatch, number>({
            query: (id: number) => ({
                url: '/matches/' + id,
                params: {
                    populate: 'competition,team_one.players.pbs,team_two.players.pbs,team_one.coach,team_two.coach',
                    fields: "time"
                }
            }),
        })
    })
})