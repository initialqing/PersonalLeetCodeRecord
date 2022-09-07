/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const index:number[] = [];
    for(let i = 0;i<nums.length;i++) {
        if(nums[i]!==0){
            index.push(nums[i])
        }
    }
    for(let j = 0;j<nums.length;j++) {
        if(j<index.length) {
            nums[j] = index[j]
            continue
        }
        nums[j] = 0
    }
    console.log(nums)
};
