import {ITeam} from "@/utils/types/teams";
import {IBet} from "@/utils/types/bet";

export type IMatch = {
    id: number;
    team_one: ITeam
    team_two: ITeam
    competition: any;
    time: string;

    bets: IBet[];
}