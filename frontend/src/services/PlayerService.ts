import {api} from "@/services/api";
import {IPlayer, Meta} from "@/models/players";


export const playerApi = api.injectEndpoints({
    endpoints: (build) => ({
        fetchAllPlayers: build.query<{data: IPlayer[], meta: Meta}, number[]>({
            query: ([page, limit]) => ({
                url: '/players',
                params: {
                    populate: "pbs,team,team.coach",
                        "pagination[page]": page,
                    "pagination[pageSize]": limit
                }
            }),
        })
    })
})

export const {
    useFetchAllPlayersQuery,
} = playerApi