let nextGreatestLetter = function (letters, target) {
    //去除异常值的情况 假如target大于letters末尾的数就直接返回letters0 或者target小于letters的第一个数
    if (target>=letters[letters.length-1]||target<letters[target.length-1]) return letters[0]
    let left = 0
    let right = letters.length
    while (left<right) {
        let mid = ((right-left)/2)+left
        if (letters[mid]<=target) {
            // 右边查找
            left = mid+1
        }else {
            // 中间值比目标值大判断前一个是否比目标值小，如果小就直接返回这个
            if (letters[mid-1]<=target){
                return letters[mid]
            }
            right = mid-1
        }
    }
    return letters[right]
};
let letters = ["c", "f", "j"]
let target = "j"
/**
 * 另一种内置函数方法
 */
let nextGreatestLetter = function (letters, target) {
    // 方法返回符合要求的数组中的第一个的值
    return letters.find(item => item > target) || letters[0]
};

