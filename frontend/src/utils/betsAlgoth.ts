import {BetType, IBet} from "@/utils/types/bet";
import {IMatch} from "@/utils/types/match";

export const getSumAmount = (teamId: number, bets: IBet[]) => {
    console.log('getSumAmount', teamId, bets)
    return bets.reduce((acc, bet) => {
        if (bet.team.id === teamId && bet.type === BetType.win) {
            return acc + bet.sum
        }
        return acc
    }, 0)
}

export const getWinCofs = (teamOne_sum: number, teamTwo_sum: number) => {
    const biggerSum = Math.max(teamOne_sum, teamTwo_sum);
    const smallerSum = Math.min(teamOne_sum, teamTwo_sum);
    const biggerSumCoof = +(smallerSum / biggerSum).toFixed(2) + 1
    const smallerSumCoof = +((biggerSum + smallerSum) / smallerSum).toFixed(2)
    console.log(teamOne_sum, teamTwo_sum)

    if(teamOne_sum > teamTwo_sum) {
        return [
            biggerSumCoof,
            smallerSumCoof
        ]
    } else {
        return [
            smallerSumCoof,
            biggerSumCoof
        ]
    }
}

export const useBetsPercentage = (teamOneId: number, teamTwoId: number, betsSumAmount: any) => {
    const coofs = getWinCofs(betsSumAmount[teamOneId], betsSumAmount[teamTwoId])
    const biggerPercentage = ((coofs[0] / (coofs[0] + coofs[1])) * 100)
    const smallerPercentage = 100 - biggerPercentage
    if (betsSumAmount[teamOneId] > betsSumAmount[teamTwoId]) {
        return {
            [teamOneId]: smallerPercentage,
            [teamTwoId]: biggerPercentage
        }
    } else {
        return {
            [teamOneId]: biggerPercentage,
            [teamTwoId]: smallerPercentage
        }
    }
}