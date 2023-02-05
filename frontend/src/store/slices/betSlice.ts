    import { createSlice, PayloadAction } from '@reduxjs/toolkit';
    import { RootState } from '../';
    import { HYDRATE } from 'next-redux-wrapper';

    interface MatchBetsState {
        team_one: {
            coefficient: number,
            width: number,
            sum: number
        },
        team_two: {
            coefficient: number,
            width: number,
            sum: number
        }
    }

    const initialState: MatchBetsState = {
        team_one: {
            coefficient: 0,
            width: 0,
            sum: 0
        },
        team_two: {
            coefficient: 0,
            width: 0,
            sum: 0
        },
    };

    export const betsSlice = createSlice({
        name: 'bets',
        initialState,
        reducers: {
            setCoefficients: (state, action: PayloadAction<number[]>) => {
                state.team_one.coefficient = action.payload[0];
                state.team_two.coefficient = action.payload[1];
            },
            setSum: (state, action: PayloadAction<number[]>) => {
                state.team_one.sum = action.payload[0];
                state.team_two.sum = action.payload[1];
            },
            setWidth: (state, action: PayloadAction<number[]>) => {
                state.team_one.width = action.payload[0];
                state.team_two.width = action.payload[1];
            }
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.bets,
                };
            },
        },
    });

    export const { setCoefficients } = betsSlice.actions;
    export const { setSum } = betsSlice.actions;
    export const { setWidth } = betsSlice.actions;

    export const selectTeams = (state: RootState) => [state.bets.team_one, state.bets.team_two];



    export const betsReducer = betsSlice.reducer;