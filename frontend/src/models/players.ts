import {IPbs, ITeam} from "@/utils/types/teams";

export type IPlayer = {
    id: number;
    attributes: {
        name: string;
        surname: string;
        dateOfBirth: string;
        isJoker: boolean;
        pbs: IPbs[];
        team: {
            data: ITeam
        },
        nationality: string;
        age_group: "U18" | "U20" | "U23" | "SENIOR";
    }
}

export type Meta = {
    pagination: {
        total: number;
        pageSize: number;
        page: number;
    }
}