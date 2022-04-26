/**
 * 
 * @param {number[]} nums1 
 * @param {number} nums2 
 * @returns {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    /**
     * 
     * 
     */
    if (!nums2.length&&!nums1.length) return 0
    let mergeArr = [...nums1,...nums2]
    mergeArr.sort((a,b) => {
        return a-b
    })
    if (mergeArr.length&2!==0) {
        return mergeArr[Math.floor(mergeArr.length/2)]
    }else {
        let num1  = mergeArr[Math.floor(mergeArr.length/2)]
        let num2 = mergeArr[Math.floor(mergeArr.length/2)-1]
        return (num1+num2)/2
    }
};
console.log(findMedianSortedArrays([1,2,3],[1,3]))