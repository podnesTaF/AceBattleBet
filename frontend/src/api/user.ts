import { AxiosInstance } from 'axios';
import {CreateUserDto, IUser, LoginUserDto, ResponseUser} from "@/utils/types/user";

export const UserApi = (instance: AxiosInstance) => ({

    async register(dto: CreateUserDto) {
        const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>(
            'auth/local/register',
            dto
        );
        return data;
    },

    async login(dto: LoginUserDto) {
        const { data } = await instance.post<LoginUserDto, { data: ResponseUser}>(
            'auth/local',
            dto
        );
        return data;
    },

    async getMe() {
        const { data } = await instance.get<IUser>('users/me');
        return data;
    },

    async updateMyBalance(id: number, newBalance: number) {
        const { data } = await instance.put<IUser>('users/' + id, {balance: newBalance});
        return data
    }
});