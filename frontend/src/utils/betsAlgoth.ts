export const getWinCofs = (teamOne_sum: number, teamTwo_sum: number) => {
    const biggerSum = Math.max(teamOne_sum, teamTwo_sum);
    const smallerSum = Math.min(teamOne_sum, teamTwo_sum);
    const biggerSumCoof =  +(smallerSum / biggerSum).toFixed(2) + 1
    const smallerSumCoof = +((biggerSum + smallerSum) / smallerSum ).toFixed(2) + 1 - biggerSumCoof
    console.log(biggerSumCoof, smallerSumCoof)
    return [
        biggerSumCoof,
        smallerSumCoof
    ]
}