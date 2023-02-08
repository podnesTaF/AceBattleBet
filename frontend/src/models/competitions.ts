export type ICompetition = {
    id: number;
    attributes: {

    }
}

export type ICompetitionsPageItem = {
    id: number;
    matches: number;
    betsCount: number;
    teams: number;
    image: any;
    date: string;
    location: string;
    name: string;
    description: string;
}