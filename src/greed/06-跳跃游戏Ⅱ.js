/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
    // 是否可以跳跃到最后一个位置
    // 假设你总是可以到达数组的最后一个位置，核心思路还是看覆盖范围
    let res = 0,cur = 0,next = 0
    for(let i = 0;i < nums.length-1;i++) {
        // 更新下一步能跳的最远的位置
        next = Math.max(nums[i]+i,next)
        // 当前元素
        if(i === cur) {
            // // 下一步最远的位置不是nums.length-1,需要继续res++
            // if(next != nums.length-1) {
            //     res++
            //     cur = next
            //     if(next > nums.length-1) break
            //     // next=== nums.length-1 直接退出
            // }else break
            res++
            cur = next
        }
    }
    return res
};
const judje = (nums) => {
    let cover = 0
    for(let i = 0;i <= cover;i++) {
        let temp = cover + nums[i]
        cover = Math.max(temp,cover)
        if(cover >= nums.length-1) {
            return true
        }
    }
    return false
}
