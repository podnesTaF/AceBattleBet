export type ITeam = {
    id: number;
    attributes: {
        name: string;
        country: string;
        players: {
            data: IPlayer[]
        };
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
    }
}

export type IPbs = {
    id: number;
    distance: number;
    time: number;
}