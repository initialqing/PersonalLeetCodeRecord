/**
 * 利用函数的双指针，以及有效山脉数组的单调性。
 * 再运用指针的时候注意数组不要越界
 * @param arr
 */
function validMountainArray(arr: number[]): boolean {
    const length: number = arr.length
    if (length < 3) return false
    let left = 0,right = length - 1
    // 遇到合适的就移动，不合适的话就不管
    while(left < length && arr[left] < arr[left+1]) left++

    while(left > 0 && arr[right] < arr[right - 1]) right--
    // 判断是否符合要求
    if(left === right && left!==0 && right!==length - 1) return true
    return false
};
