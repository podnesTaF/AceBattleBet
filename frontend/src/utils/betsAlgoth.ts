import {BetType, IBet} from "@/utils/types/bet";

export const getSumAmount = (teamId: number, bets: IBet[]) => {
    return bets.length > 0 ? bets.reduce((acc, bet) => {
        if (bet.team.id === teamId && bet.type === BetType.win) {
            return acc + bet.sum
        }
        return acc
    }, 0) : 0
}

export const getWinCofs = (teamOne_sum: number, teamTwo_sum: number) => {
    const biggerSum = Math.max(teamOne_sum, teamTwo_sum);
    const smallerSum = Math.min(teamOne_sum, teamTwo_sum);
    const biggerSumCoof = +(smallerSum / biggerSum).toFixed(2) + 1
    const smallerSumCoof = +((biggerSum + smallerSum) / smallerSum).toFixed(2)

    if(teamOne_sum > teamTwo_sum) {
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
        return [
            smallerSumCoof,
            biggerSumCoof
        ]
    }
}

export const useBetsPercentage = (betsSumAmount: any) => {
    const coofs = getWinCofs(betsSumAmount[0], betsSumAmount[1])
    const biggerPercentage = ((coofs[0] / (coofs[0] + coofs[1])) * 100)
    const smallerPercentage = 100 - biggerPercentage
    if (betsSumAmount[0] > betsSumAmount[1]) {
        return [
            biggerPercentage,
            smallerPercentage
        ]
    } else {
        return [
            smallerPercentage,
            biggerPercentage
        ]
    }
}