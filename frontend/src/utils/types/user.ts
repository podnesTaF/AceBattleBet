import {IBet} from "@/utils/types/bet";

export type IUser = {
    email: string;
    username: string;
    dateOfBirth?: string;
    id: number;
    balance: number;
    bets: IBet[];
}

export type ResponseUser = {
    user: IUser,
    jwt: string
}

export type LoginUserDto = {
    identifier: string;
    password: string;

}

export type CreateUserDto = {
    email: string;

    username: string;
    dateOfBirth: Date;
    password: string;
}
