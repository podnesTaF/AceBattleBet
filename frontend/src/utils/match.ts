import {ResponseFullMatch} from "@/models/match";

export const getIMatch = (data: ResponseFullMatch) => {
const {id, attributes} = data.data;
    const {time, competition, team_one, team_two} = attributes;
    return {
        id,
        time,
        competition: competition.data,
        team_one: team_one.data,
        team_two: team_two.data
    }
}