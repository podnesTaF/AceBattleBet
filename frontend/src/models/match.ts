import {ICoach, ITeam} from "@/utils/types/teams";
import {IBet} from "@/utils/types/bet";
import {Meta} from "@/models/players";

export type IMatch = {
    id: number;
    team_one: ITeam;
    team_two: ITeam;
    name: string;
    location: string;
    competition: {
        data: {
            id: number;
            attributes: {
                name: string;
                date: string;
                location: string;
                description: string;
            }
        }
    };
    time: string;
    bets: IBet[];
}

export type ResponseMatch = {
    id: number;
    attributes: {
        time: string;
        name: string;
        bets: IBet[];
        team_one: {
            data: ITeam
        };
        team_two: {
            data: ITeam
        }
    }
}

export type ResponseFullMatch = {
    data: {
        id: number;
        attributes: {
            name: string;
            time: string;
            competition: {
                data: {
                    id: number;
                    attributes: {
                        name: string;
                        date: string;
                        location: string;
                        description: string;
                    }
                }
            },
            team_one: {
                data: ITeam
            },
            team_two: {
                data: ITeam
            }
        }
    }
}

export type ResponseAllMatches = {
    data: ResponseMatch[]
    meta: Meta;
}