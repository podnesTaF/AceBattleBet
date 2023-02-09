import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {RootState} from "@/store";
import {getWinCofs} from "@/utils/betsAlgoth";

export enum differenceTypes {
    less5 = 'less5',
    less10 = 'less10',
    less20 = 'less20',
    less30 = 'less30',
    more30 = 'more30',
}

type agreementState = {
    agree: {
        coefficient: number,
        sum: number
    },
    disagree: {
        coefficient: number,
        sum: number
    }
}

export type differenceStates = {
    name: differenceTypes,
    agree: {
        coefficient: number,
        sum: number
    },
    disagree: {
        coefficient: number,
        sum: number
    }

}

export interface MatchDifferenceBetsState {
    team_one: {
        id: number | null,
        statements: differenceStates[]
    },
    team_two: {
        id: number | null,
        statements: differenceStates[]
    }
}

const initAgreements: agreementState = {
    agree: {
        coefficient: 2,
        sum: 0
    },
    disagree: {
        coefficient: 2,
        sum: 0
    }
}

const initialDifference: differenceStates[] = [
    {
        name: differenceTypes.less5,
        ...initAgreements

    },
    {
        name: differenceTypes.less10,
        ...initAgreements
    },
    {
        name: differenceTypes.less20,
        ...initAgreements
    },
    {
        name: differenceTypes.less30,
        ...initAgreements
    },
    {
        name: differenceTypes.more30,
        ...initAgreements
    }
]

const initialState: MatchDifferenceBetsState = {
    team_one: {
        id: null,
        statements: initialDifference
    },
    team_two: {
        id: null,
        statements: initialDifference
    }
};
export const differenceSlice = createSlice({
    name: 'difference',
    initialState,
    reducers: {
        setTeamOneDifferences: (state, action: PayloadAction<{id: number, statements: differenceStates[]}>) => {
            state.team_one.id = action.payload.id;
            state.team_one.statements = action.payload.statements;
        },
        setTeamTwoDifferences: (state, action: PayloadAction<{id: number, statements: differenceStates[]}>) => {
            state.team_two.id = action.payload.id;
            state.team_two.statements = action.payload.statements;
        },
        addBet: (state, action: PayloadAction<{teamId: number, type: differenceTypes, agree: boolean, sum: number}>) => {
            const {teamId, type, agree, sum} = action.payload;
            const team = teamId === state.team_one.id ? state.team_one : state.team_two;
            const statement = team.statements.find(statement => statement.name === type);
            if (statement) {
                if (agree) {
                    statement.agree.sum += sum;
                } else {
                    statement.disagree.sum += sum;
                }
                statement.agree.coefficient = getWinCofs(statement.agree.sum, statement.disagree.sum)[0];
                statement.disagree.coefficient = getWinCofs(statement.agree.sum, statement.disagree.sum)[1];
            }
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

export const {setTeamOneDifferences, setTeamTwoDifferences, addBet} = differenceSlice.actions;

export const selectDiffTeams = (state: RootState) => [state.difference.team_one, state.difference.team_two];



export const differenceReducer = differenceSlice.reducer;