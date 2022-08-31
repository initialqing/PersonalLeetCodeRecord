/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 暴力
 */
const nextGreaterElement = function (nums1, nums2) {
    let ans = new Array(nums1.length).fill(-1)

    for (let i = 0; i < nums1.length; i++) {
        let tempIndex = nums2.indexOf(nums1[i])

        for (let j = tempIndex + 1; j < nums2.length; j++) {

            if (nums2[j] > nums1[i]) {
                ans[i] = nums2[j]
                break
            }
        }
    }
    return ans
};
/**
 * 找到后一个比前面一个大的元素
 * @param nums1
 * @param nums2
 * @returns {any[]}
 */
const nextGreaterElement1 = function (nums1, nums2) {
    let ans = new Array(nums1.length).fill(-1)
    // 做nums1坐标的映射
    let m = {}
    for (let i = 0; i < nums1.length; i++) {
        m[nums1[i]] = i
    }
    let stack = [0]
    // 在nums2中找到后一个比前面一个大的元素，假如前面小的元素在nums1中存在就进行一系列操作。更新结果数组
    for (let i = 1; i < nums2.length; i++) {
        const top = stack[stack.length-1]
        if (nums2[i]<=nums2[top]) {
            stack.push(i)
        }else {
            while (stack.length && nums2[i] > nums2[stack[stack.length-1]]) {
                if (m[nums2[stack[stack.length-1]]] >= 0 ) {
                    const index = m[nums2[stack[stack.length-1]]]
                    ans[index] = nums2[i]
                }
                stack.pop()
            }
            stack.push(i)
        }
    }
    return ans
};
