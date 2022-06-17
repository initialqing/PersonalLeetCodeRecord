/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
const fourSumCount = function(nums1, nums2, nums3, nums4) {
    let count = 0,sum = 0
    let twoSumMap = new Map()
    for(const n1 of nums1) {
        for(const n2 of nums2) {
            sum = n1 + n2
            twoSumMap.set(sum,(twoSumMap.get(sum) || 0) + 1)
        }
    }
    for(const n3 of nums3) {
        for(const n4 of nums4) {
            sum = n3 + n4
            count += (twoSumMap.get(0-sum)||0)
        }
    }
    return count
};
