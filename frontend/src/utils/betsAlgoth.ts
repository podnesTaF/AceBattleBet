import {BetType, IBet} from "@/utils/types/bet";

export const getSumAmount = (teamId: number, bets: IBet[]) => {
    return bets.length > 0 ? bets.reduce((acc, bet) => {
        if (bet.team.id === teamId && bet.type === BetType.win) {
            return acc + bet.sum
        }
        return acc
    }, 0) : 10
}

export const getWinCofs = (teamOne_sum: number, teamTwo_sum: number) => {
    const biggerSum = Math.max(teamOne_sum, teamTwo_sum);
    const smallerSum = Math.min(teamOne_sum, teamTwo_sum);
    const biggerSumCoof = +(smallerSum / biggerSum).toFixed(2) + 1
    const smallerSumCoof = +((biggerSum + smallerSum) / smallerSum).toFixed(2)

    if(teamOne_sum > teamTwo_sum) {
        if(biggerSumCoof === 1) {
            return [
                1.2,
                12.50
            ]
        }
        return [
            biggerSumCoof,
            smallerSumCoof
        ]
    } else if (teamOne_sum === teamTwo_sum) {
        return [
            2,
            2
        ]
    } else {
        if(biggerSumCoof === 1) {
            return [
                1.05,
                12.50
            ]
        }
        return [
            smallerSumCoof,
            biggerSumCoof
        ]
    }
}

export const getBetsPercentage = (betsSumAmount: any) => {
    const coofs = getWinCofs(betsSumAmount[0], betsSumAmount[1])
    const biggerPercentage = ((coofs[0] / (coofs[0] + coofs[1])) * 100)
    const smallerPercentage = 100 - biggerPercentage
    if (betsSumAmount[0] > betsSumAmount[1]) {
        if(smallerPercentage < 10) {
            return [
                80,
                20
            ]
        }
        return [
            biggerPercentage,
            smallerPercentage
        ]
    } else {
        if(smallerPercentage < 10) {
            return [
                80,
                20
            ]
        }
        return [
            smallerPercentage,
            biggerPercentage
        ]
    }
}

export const getPossibleWin = (teams: any, sum?: number, teamId?: number) => {
    if (sum && teamId) {
        const teamCoef = teams.find((team: any) => team.id === teamId).coefficient
        return +(sum * teamCoef).toFixed(2)
    } else if (sum) {
        return +(teams[0].coefficient * sum).toFixed(2)
    }
    else return 0
}