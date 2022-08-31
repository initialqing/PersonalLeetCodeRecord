/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    //这种方法所依据的核心特性：如果一个位置能够到达，那么这个位置左侧所有位置都能到达。 想到这一点，解法就呼之欲出了~
    let juli = 0
    for (let i = 0; i < nums.length; i++) {
        if (i>juli) return  false
        juli = Math.max(i+nums[i],juli)
    }
    return  true
};
