import {IUser} from "@/utils/types/user";
import {ITeam} from "@/utils/types/teams";
import {BetType} from "@/utils/types/bet";

export type ResponsePureBets = {
    data: {
        id: number;
        attributes: {
            sum: number;
            type: BetType;
            createdAt: string;
            coefficient?: number;
            possibleWin?: number;
        };
    }[]
}

export type IBet = {
    id: number;
    sum: number;
    user: IUser;
    matchId: number;
    team: ITeam;
    type: BetType;
    differenceRate?: number;
    playerId?: number;
    coefficient?: number;
    possibleWin?: number;
}