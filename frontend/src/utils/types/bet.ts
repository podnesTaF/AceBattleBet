import {IUser} from "@/utils/types/user";
import {ITeam} from "@/utils/types/teams";
import {differenceTypes} from "@/store/slices/differenceSlice";

export type IBet = {
    id: number;
    sum: number;
    user: IUser;
    matchId: number;
    team: ITeam;
    type: BetType;
    playerId?: number;
    coefficient?: number;
    possibleWin?: number;
    differenceType?: differenceTypes;
    agree?: boolean;
}

export enum BetType {
    win = 'win',
    difference = 'difference',

}

export type CreateBetDto = {
    sum: number;
    match: number;
    team: number;
    user: number;
    type: BetType;

}