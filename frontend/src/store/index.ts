/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {userReducer, betsReducer, differenceReducer} from "@/store/slices";
import {api} from "@/services/api";

export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer,
            bets: betsReducer,
            difference: differenceReducer,
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
