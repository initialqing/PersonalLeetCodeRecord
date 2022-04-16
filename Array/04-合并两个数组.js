function merge(nums1, m, nums2, n) {
    if (m === 0) {
        nums1 = nums2
    }
    if (n!==0) {
        // let arr = new Array()
        let arr = []
        for (let i = 0; i < m; i++) {
            arr.push(nums1[i])
        }
        for (let j = 0; j < nums2.length; j++) {
            arr.push(nums2[j])
        }
        arr.sort()
        nums1 = arr
        return nums1
    }
}

let num1 = [0]
let num2 = [2, 5, 6]
console.log(num2.pop())
console.log(num2)
console.log(merge(num1, 0, num2, 3))
//只可以操作nums 妈的气死爷爷了
function merge(nums1, m, nums2, n) {
    if (n!==0) {
        for(let i = nums1.length; i > m;i--){
            nums1.pop()
        }
        for(let j = 0;j<nums2.length;j++){
            nums1.push(nums2[j])
        }
        nums1.sort((a,b) => a-b)
    }
}
