/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    if(canPartition(stones)) {
        return 0
    }
    let sum = 0
    stones.forEach(item => {
        return sum += item
    })
    let bags = Math.floor(sum/2),dp = new Array(stones.length).fill(0).map(() => new Array(bags+1).fill(0))

    for(let i = 0;i<dp[0].length;i++) {
        let num = Math.floor(i/stones[0])
        if(num>=1) {
            dp[0][i] =  stones[0]
        }
    }
    for(let j = 0;j<stones.length;j++) {
        dp[j][0] = 0
    }
    //初始化


    for(let i = 1;i<stones.length;i++) {
        for(let j = 0;j<=bags;j++) {
            if(j<stones[i]) {
                dp[i][j] = dp[i-1][j]
            }else {
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-stones[i]]+stones[i])
            }
        }
    }
    return sum-(dp[stones.length-1][bags]*2)
};

const canPartition = function(nums) {
    // 1、 求和/2
    // 2、初始化dp数组
    // 3 、递推公式
    let sum = 0
    nums.forEach(item => {
        sum+=item
    })
    let bags  = sum / 2
    if(Math.floor(bags)!==bags) {
        return false
    }
    let dp = new Array(nums.length).fill(0).map(() => new Array(bags+1).fill(0))
    for(let i = 0;i<dp[0].length;i++) {
        let num = Math.floor(i/nums[0])
        if(num>=1) {
            dp[0][i] =  nums[0]
        }
    }
    for(let j = 0;j<nums.length;j++) {
        dp[j][0] = 0
    }
    for(let i = 1;i<nums.length;i++) {
        for(let j = 0;j<=bags;j++) {
            if(j<nums[i]) {
                dp[i][j] = dp[i-1][j]
            }else {
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-nums[i]]+nums[i])
            }
        }
    }
    return dp[nums.length-1][bags] === bags
};
