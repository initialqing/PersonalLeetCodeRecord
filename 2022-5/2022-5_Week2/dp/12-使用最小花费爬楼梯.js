/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
    let min = Math.min(cost[0],cost[1])
    if(cost.length<3) return min
    if(cost.length===3) return Math.min(cost[0]+cost[1],cost[1])
    let dp = [0,0]
    for(let i = 2;i<cost.length+1;i++) {
        dp[i] = Math.min(cost[i-1] + dp[i-1],cost[i-2]+dp[i-2])
    }
    return dp[cost.length]
};