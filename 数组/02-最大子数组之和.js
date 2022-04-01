// 贪心算法
// function tanxin(nums) {
//     if (nums.length !== 1) {
//         let lastSum = nums[0]
//         let curSum = nums[0]
//         let maxSum = nums[0]
//         for (let i = 1; i < nums.length; i++) {
//             if (curSum+nums[i]>nums[i]){
//                 curSum+= nums[i]
//             }
//             curSum = nums[i]
//             if (curSum > maxSum) {
//                 maxSum = curSum
//             }
//         }
//         return maxSum
//     }
//     return nums[0]
// }

// console.log(tanxin([-1,-1,-2,-2]))
// function tanxin(nums) {
//     if (nums.length===1) return nums[0]
//     let curSum = nums[0]
//     let maxSum = nums[0]
//     for (let i = 1; i < nums.length; i++) {
//         // 只有curSum+nums[i] 大于 nums[i]的时候才改变curSum的数值 从而可以连续相加
//         curSum = Math.max(nums[i],curSum+nums[i])
//         maxSum = Math.max(curSum,maxSum)
//     }
//     return maxSum
// }
// console.log(tanxin([-1,-1,-2,-2]))
// 动态规划
// function dongtaiguihua(nums) {
//     let pre = 0
//     let maxSum = nums[0]
//     nums.forEach(x => {
//         pre = Math.max(pre+x,x)
//         maxSum = Math.max(pre,maxSum)
//     })
//     return maxSum
// }
// console.log(dongtaiguihua([-1,-1,-2,-2]))
function qiaomiao(nums) {
   let sumMax = nums[0]
   let sum = 0
    for (const num of nums) {
        if (sum>0) {
            // 因为只有sum大于0才有加上后面数的必要，sum小于0就没有必要了
            sum+=num
        }else {
            // sum小于0直接更换这个连续数组和的起点，从这个起点开始+
            sum = num
        }
        sumMax = Math.max(sum,sumMax)
    }
    return sumMax
}
console.log(qiaomiao([-1,-1,-2,-2]))
