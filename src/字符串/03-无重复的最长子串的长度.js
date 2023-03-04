/**无重复
 * @param {string} s
 * @return {number}
 * 解法1：采用队列的方法动态删除
 */
/*
const lengthOfLongestSubstring = function(s) {
    let queue = []
    let res = 0
    for (const sElement of s) {
        while (queue.includes(sElement)) {
            queue.shift()
        }
        queue.push(sElement)
        res = Math.max(queue.length,res)
    }
    return res
};
*/
/**
 * 解法2：滑动窗口
 * @param s
 * @return {number}
 */
/*
const lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let res = 0
    let right = -1
    for (let i = 0; i < s.length; i++) {
        if (i !== 0) {
            set.delete(s.charAt(i - 1))
        }
        // right初值为-1所以判断条件需要注意
        while (right < s.length-1 && !set.has(s.charAt(right+1))) {
            set.add(s.charAt(right+1))
            right++
        }
        res = Math.max(res,right-i+1)
    }
    return res
};*/
/**
 * 解法3：采用map集合滑动窗口
 * @param s
 * @return {number}
 */
const lengthOf = (s) => {
    let left = 0;
    let long = 0;
    const map = new Map(), len = s.length;
    for (let right = 0; right < len; right++) {
        // 遇到重复字符时还要判定 该重复字符的上一次出现位置是否在 滑动窗口左边界 left 的右边
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1; // 都满足，则更新，更新到最近出现的那个重复字符，它的上一个索引的右边
        }
        long = Math.max(long, right - left + 1); // 比较滑动窗口大小与 long 的长度
        map.set(s[right], right); // 无论有没有重复，每次遍历都要更新字符的出现位置
    }
    return long;
}
lengthOf("abcabcdabc")