import {ITeam} from "@/utils/types/teams";
import {IBet} from "@/utils/types/bet";

export type IMatch = {
    id: number;
    team_one: ITeam
    team_two: ITeam
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

export type ResponseFullMatch = {
    data: {
        id: number;
        attributes: {
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
    data: {
        id: number;
        attributes: {
            time: string;
            bets: IBet[];
            team_one: {
                data: ITeam
            };
            team_two: {
                data: ITeam
            }
        }
    }[]
}