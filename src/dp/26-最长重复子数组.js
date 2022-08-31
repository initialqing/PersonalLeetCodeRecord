/**
 *
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = function(nums1, nums2) {
    // const length = nums1.length>=nums2.length? nums1.length : nums2.length
    // let dp = new Array(nums1.length+1).fill(0).map(() => new Array(nums2.length+1).fill(0)),res = 0
    // for(let i = 1;i<=nums1.length;i++) {
    //    for(let j = 1;j<=nums2.length;j++) {
    //        if(nums1[i-1]===nums2[j-1]) {
    //            dp[i][j] = dp[i-1][j-1] + 1
    //        }
    //        if(dp[i][j] > res) res = dp[i][j]
    //    }
    // }
    // return res
};
/**
 * 滚动数组的写法
 * @param nums1
 * @param nums2
 * @returns {number}
 */
const findLengthRollArray = function (nums1,nums2) {
    let len1 = nums1.length, len2 = nums2.length;
    // dp[i][j]: 以nums1[i-1]、nums2[j-1]为结尾的最长公共子数组的长度
    let dp = new Array(len2+1).fill(0);
    let res = 0;
    for (let i = 1; i <= len1; i++) {
        for (let j = len2; j > 0; j--) {
            if (nums1[i-1] === nums2[j-1]) {
                dp[j] = dp[j-1] + 1;
            } else {
                dp[j] = 0;
            }
            res = Math.max(res, dp[j]);
        }
        console.log(dp)
    }
    return res;
}
