import {ResponseAllMatches, ResponseFullMatch} from "@/models/match";

export const getIMatch = (data: ResponseFullMatch) => {
const {id, attributes} = data.data;
    const {time, competition, team_one, team_two} = attributes;
    return {
        id,
        time,
        competition: competition.data,
        team_one: team_one.data,
        team_two: team_two.data,
        bets: []
    }
}

export const getIMatches = (data: ResponseAllMatches) => {
    return data.data.map((match: any) => ({
        id: match.id,
        ...match.attributes,
        team_one: match.attributes.team_one.data,
        team_two: match.attributes.team_two.data,
        bets: [
            ...match.attributes.bets.data.map((bet: any) => ({
                ...bet.attributes,
                team: bet.attributes.team.data,
            }))
        ],
        time: match.attributes.time
    }))
}