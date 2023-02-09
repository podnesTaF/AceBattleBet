import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../';
import {HYDRATE} from 'next-redux-wrapper';
import {getWinCofs, useBetsPercentage} from "@/utils/betsAlgoth";
import {differenceTypes} from "@/store/slices/differenceSlice";

interface MatchBetsState {
    team_one: {
        id: number | null,
        coefficient: number,
        width: number,
        sum: number
    },
    team_two: {
        id: number | null,
        coefficient: number,
        width: number,
        sum: number
    }

}

const initialState: MatchBetsState = {
    team_one: {
        id: null,
        coefficient: 0,
        width: 0,
        sum: 0
    },
    team_two: {
        id: null,
        coefficient: 0,
        width: 0,
        sum: 0
    },
};
export const betsSlice = createSlice({
    name: 'bets',
    initialState,
    reducers: {
        setTeamIds: (state, action: PayloadAction<number[]>) => {
            state.team_one.id = action.payload[0];
            state.team_two.id = action.payload[1];
        },
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
        },
        addBet: (state, action: PayloadAction<number[]>) => {
            if (action.payload[0] === state.team_one.id) {
                state.team_one.sum += action.payload[1];
            } else {
                state.team_two.sum += action.payload[1];
            }
            const coefs = getWinCofs(state.team_one.sum, state.team_two.sum)
            state.team_one.coefficient = coefs[0];
            state.team_two.coefficient = coefs[1];
            const width = useBetsPercentage([state.team_one.sum, state.team_two.sum])
            state.team_one.width = width[0];
            state.team_two.width = width[1];
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

export const {setCoefficients} = betsSlice.actions;
export const {setSum} = betsSlice.actions;
export const {setWidth} = betsSlice.actions;
export const {addBet} = betsSlice.actions;
export const {setTeamIds} = betsSlice.actions;


export const selectTeams = (state: RootState) => [state.bets.team_one, state.bets.team_two];


export const betsReducer = betsSlice.reducer;