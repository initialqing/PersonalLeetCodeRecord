const dajie  = (nums) => {
    const max  = (nums,index) => {
        if (nums===null || index<0) return 0
        if (index===0) return nums[0]
        return Math.max(max(nums,index-1),max(nums,index-2)+nums[index])
    }
    return max(nums,nums.length-1)
}
let nums = [1,4,3,1,5,3]
console.log(dajie(nums))
