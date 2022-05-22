var findNumberOfLIS = function(nums) {
    let n = nums.length, maxLen = 0, ans = 0;
    const dp = new Array(n).fill(0);
    const cnt = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        dp[i] = 1;
        cnt[i] = 1;
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    // 以i结尾的最长递增子序列的长度
                    dp[i] = dp[j] + 1;
                    // 以i结尾的最长自增子序列的个数
                    cnt[i] = cnt[j]; // 重置计数
                } else if (dp[j] + 1 === dp[i]) {
                    cnt[i] += cnt[j];
                }
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            ans = cnt[i]; // 重置计数
        } else if (dp[i] === maxLen) {
            ans += cnt[i];
        }
    }
    return ans;
};
findNumberOfLIS([1,3,5,4,7])
