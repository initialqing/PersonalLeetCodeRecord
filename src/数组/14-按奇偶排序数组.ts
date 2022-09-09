function sortArrayByParityII(nums: number[]): number[] {
    let ans:number[] = new Array(nums.length).fill(0)
    let odd:number[] = [],oushu:number[] = []
    for(let i = 0;i<nums.length;i++) {

        if(nums[i]%2===0) {
            oushu.push(nums[i])

        }else {
            odd.push(nums[i])
        }
    }
    for(let j = 0;j<ans.length;j++) {
        if(j%2===0) {
            const tempoushu = oushu.shift()!
            ans[j] = tempoushu
        }else {
            const tempOdd = odd.shift()!
            ans[j] = tempOdd
        }
    }
    return ans
};
