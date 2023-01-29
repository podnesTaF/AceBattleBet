import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';

import { HYDRATE } from 'next-redux-wrapper';
import {IUser} from "@/utils/types/user";

export interface UserState {
    data?: IUser | null;
}
const initialState: UserState = {
    data: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUser>) => {
            state.data = action.payload;
        },
        deleteUserData: (state) => {
            state.data = null
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.user,
            };
        },
    },
});

export const { setUserData } = userSlice.actions;
export const {deleteUserData} = userSlice.actions

export const selectUserData = (state: RootState) => state.user.data;



export const userReducer = userSlice.reducer;