/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {userReducer} from "@/store/slices";
import {betsReducer} from "@/store/slices/betSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer,
            bets: betsReducer
        },
    });
}

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<RootStore>(makeStore, {
    debug: true,
});
