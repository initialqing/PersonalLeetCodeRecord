function searchInsert(nums: number[], target: number): number {
    return  findIndex(nums,target);
};

function findIndex(nums:number[],target:number):number {
    let left = 0,right = nums.length - 1
    while(left <= right) {
        const mid = Math.floor(left + (right - left)/ 2)
        if(nums[mid] > target) {
            right = mid - 1
        }else if(nums[mid] < target) {
            left = mid + 1
        }else {
            return  mid
        }
    }
    return left
}
