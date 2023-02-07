export type ITeam = {
    id: number;
    attributes: {
        name: string;
        country: string;
        players: {
            data: IPlayer[]
        };
        coach: {
            data: ICoach
        };
    }
}

export type ICoach = {
    id: number;
    attributes: {
        name: string;
        surname: string;
    }
}

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
        category: "U18" | "U20" | "U23" | "SENIOR";
    }
}

export type IPbs = {
    id: number;
    distance: number;
    time: number;
}