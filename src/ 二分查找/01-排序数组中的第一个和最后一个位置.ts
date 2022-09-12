/**
 *
 * @param nums
 * @param target
 */
function searchRange(nums: number[], target: number): number[] {
    const low = lowerBound(nums,target)
    const upper = upperBound(nums,target)
    if (upper<low) {
        return [-1,-1]
    }
    return [low,upper]
};

function lowerBound(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] >= target){
            right = mid - 1
        }else if (nums[mid] < target) {
            left = mid + 1
        }
    }
    return  left
}

function upperBound(nums: number[], target: number): number{
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] > target){
            right = mid - 1
        }else if (nums[mid] <= target) {
            left = mid + 1
        }
    }
    return  right
}
