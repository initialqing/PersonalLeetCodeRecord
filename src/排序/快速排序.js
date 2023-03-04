

function quickSort(nums, left, right) {
    if(left >= right) return
    let begin = left,end = right
    // 选定区间中的一个值,选取后面的值就需要从前面开始交换。
    let value = nums[end]
    while (begin < end) {
        while (begin < end && nums[begin] <= value) {
            begin++
        }
        if (begin < end) {
            nums[end] = nums[begin];
        }

        while (begin < end && nums[end] >= value) {
            end--
        }
        if(begin < end) {
            nums[begin] = nums[end]
        }             

    }
    nums[end] = value
    
    quickSort(nums,left,end-1)
    quickSort(nums,end+1,right)
}
const nums = [2,1,3,4,6,8,3,7] 
quickSort(nums,0,nums.length-1)
console.log(nums)