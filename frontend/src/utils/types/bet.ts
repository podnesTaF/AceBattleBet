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
}

export enum BetType {
    win = 'win',
    difference = 'difference',
    joker = 'joker',
    fastest = 'fastest',

}