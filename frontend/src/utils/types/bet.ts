export type IBet = {
    id: number;
    sum: number;
    userId: number;
    matchId: number;
    teamId: number;
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