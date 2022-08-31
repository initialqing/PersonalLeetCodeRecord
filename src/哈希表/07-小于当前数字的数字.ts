/**
 * 暴力解
 * @param nums
 */
function smallerNumbersThanCurrent(nums: number[]): number[] {
    let res:number[] = [];
    // 会改变原数组的顺序
    for(let i = 0;i < nums.length;i++) {
        let count:number = 0;
        for(let j = 0;j<nums.length;j++) {
            if(j===i) continue
            if(nums[j] < nums[i]) {
                count++
            }
        }
        res.push(count)
    }
    return res
};
type map = {
    [k: number]: number
}

/**
 * 哈希表对应关系
 * @param nums
 */
function smallerNumbersThanCurrentHash(nums: number[]): number[] {
    const length: number = nums.length
    // 浅拷贝
    const sortArr: number[] = [...nums]
    sortArr.sort((a, b) => a - b)
    const hashMap: map = {};
    for (let i = length - 1; i >= 0; i--) {
        hashMap[sortArr[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        sortArr[i] = hashMap[nums[i]]
    }
    return sortArr
};
