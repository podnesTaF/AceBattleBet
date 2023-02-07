import {IUser} from "@/utils/types/user";
import {ITeam} from "@/utils/types/teams";

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

export enum BetType {
    win = 'win',
    difference = 'difference',
    joker = 'joker',
    fastest = 'fastest',

}

export type CreateBetDto = {
    sum: number;
    match: number;
    team: number;
    user: number;
    type: BetType;

}