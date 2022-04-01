// 巧用map集合
// function sum(nums,target) {
//     let m = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         x = target - nums[i]
//         if (m.has(x)) {
//             return [m.get(x),i]
//         }
//         m.set(nums[i],i)
//     }
//     return []
// }
//
// // console.log(sum([2,7,11,15],9))
// console.log(sum([3,2,4],5))
// 暴力解法
function sum(nums,target) {

    for (let i = 0; i < nums.length; i++) {
        let x = target - nums[i]
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j]===x){
                return [i,j]
            }
        }
    }
    return []
}
console.log(sum([3,2,5],7))
