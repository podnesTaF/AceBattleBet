import {IBet} from "@/models/bets";
import {differenceTypes, MatchDifferenceBetsState} from "@/store/slices/differenceSlice";
import {getWinCofs} from "@/utils/betsAlgoth";

export const structureStatementType = (bets: IBet[], name: differenceTypes) => {
    const typeBets = bets.filter(bet => bet.differenceType === name);
    const agreeSum = typeBets.reduce((acc, bet) => {
        const sum = bet.agree ? bet.sum : 0;
        return acc + sum
    }, 0)

    const disagreeSum = typeBets.reduce((acc, bet) => {
        const sum = bet.agree ? 0 : bet.sum;
        return acc + sum
    }, 0)

    const coefficients = getWinCofs(agreeSum, disagreeSum);

    const agreeCoef = coefficients[0];
    const disagreeCoef = coefficients[1];

        return {
            agree: {
                coefficient: agreeCoef,
                sum: agreeSum
            },
            disagree: {
                coefficient: disagreeCoef,
                sum: disagreeSum
            }
        }
}

export const structureDifferenceBets = (bets: IBet[], id: number) => {
    return {
        id,
        statements: [
            {
                name: differenceTypes.less5,
                ...structureStatementType(bets, differenceTypes.less5)
            },
            {
                name: differenceTypes.less10,
                ...structureStatementType(bets, differenceTypes.less10)
            },
            {
                name: differenceTypes.less20,
                ...structureStatementType(bets, differenceTypes.less20)
            },
            {
                name: differenceTypes.less30,
                ...structureStatementType(bets, differenceTypes.less30)
            },
            {
                name: differenceTypes.more30,
                ...structureStatementType(bets, differenceTypes.more30)
            }
        ]
    }
}

export const findCoef = (teams: any, teamId: number, diffType: differenceTypes, agree: boolean) => {
    let cof = teams.find((team: any) => team.id === teamId)
    cof = cof?.statements.find((state: any) => state.name === diffType)
    if(agree && cof) {
        cof = cof.agree.coefficient
    } else if (cof) {
        cof = cof.disagree.coefficient
    }
    return cof || 2
}