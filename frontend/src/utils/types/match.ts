import {ITeam} from "@/utils/types/teams";
import {IBet} from "@/utils/types/bet";

export type IMatch = {
    id: number;
    attributes: {
        team_one: {
            data: ITeam
        };
        team_two: {
            data: ITeam
        };
        name: string;
        location: string;
        competition: any;
        bets: IBet[]
    }
}