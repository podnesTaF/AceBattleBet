/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {userReducer} from "@/store/slices";
import {betsReducer} from "@/store/slices/betSlice";
import {matchApi} from "@/services/MatchService";
import {betsApi} from "@/services/BetsService";
import {api} from "@/services/api";

export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer,
            bets: betsReducer,
            [api.reducerPath]: api.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
    });
}

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<RootStore>(makeStore, {
    debug: true,
});
