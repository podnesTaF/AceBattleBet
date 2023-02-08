import {IUser} from "@/utils/types/user";
import {ITeam} from "@/utils/types/teams";
import {BetType} from "@/utils/types/bet";
import {IMatch, ResponseMatch} from "@/models/match";
import {Meta} from "@/models/players";

export type ResponsePureBets = {
    data: IPureBet[]
}

export type IPureBet = {
    id: number;
    attributes: {
        sum: number;
        type: BetType;
        createdAt: string;
        coefficient?: number;
        possibleWin?: number;
    };
}

export type UserBetsResponse = {
    data: IUserBet[],
    meta: Meta;
}

export type IUserBet = {
    id: number;
    attributes: {
        sum: number;
        type: BetType;
        createdAt: string;
        match: {
            data: ResponseMatch
        },
        team: {
            data: ITeam
        }
        coefficient: number;
        possibleWin?: number;
    }
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