import {ResponseAllMatches, ResponseFullMatch} from "@/models/match";
import {api} from "@/services/api";


export const matchApi = api.injectEndpoints({
    endpoints: (build) => ({
        fetchFullMatch: build.query<ResponseFullMatch, number>({
            query: (id: number) => ({
                url: '/matches/' + id,
                params: {
                    populate: 'competition,team_one.players.pbs,team_two.players.pbs,team_one.coach,team_two.coach',
                    fields: "time"
                }
            }),
        }),
        fetchAllMatches: build.query<ResponseAllMatches, void>({
            query: () => ({
                url: '/matches',
                params: {
                    populate: '/matches?populate=bets.team,team_one,team_two'
                }
            }),
        }),
        fetchMatchesByCompetition: build.query<ResponseAllMatches, number[]>({
            query: ([id, page, limit]) => ({
                url: '/matches',
                params: {
                    "filters[competition][id][$eq]": id,
                    populate: "team_one.players,team_two.players,team_one.coach,team_two.coach",
                    "pagination[page]": page,
                    "pagination[pageSize]": limit
                }
            })
        })
    })
})

export const {
    useFetchFullMatchQuery,
    useFetchAllMatchesQuery,
    useFetchMatchesByCompetitionQuery,
} = matchApi