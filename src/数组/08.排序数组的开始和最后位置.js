/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    //简单的暴力解法
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            res.push(i)
            break
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === target) {
            res.push(i)
            break
        }
    }
    if (!res.length) {
        return [-1, -1]
    } else if (res.length === 2) {
        return res
    }
    // 另一个方法
    // const binarySearch = (nums,target,condition) => {
    //     let left = 0,right = nums.length-1,ans = nums.length
    //     while(left<=right) {
    //         let mid = left + Math.floor((right-left) >> 1)
    //         if( nums[mid] > target || (condition && nums[mid]>=target)) {
    //             right = mid - 1
    //             ans = mid
    //         }else {
    //             left = mid + 1
    //         }
    //     }
    //     return ans
    // }
    // let leftIndex = binarySearch(nums,target,true)
    // let rightIndex = binarySearch(nums,target,false)-1
    // let res = [leftIndex,rightIndex]
    // 这边也可以使用every方法进行判断是否可以通过测试，假如每个元素都能通过测试则返回一个true的Boolean数值
    // for(const s of res) {
    //     if(nums[s]!==target) {
    //         return [-1,-1]
    //     }
    // }
    // return res
    /**
  * 范围查询规律
  * 初始化:
  *   int left = 0;
  *   int right = nums.length - 1;
  * 循环条件
  *   left <= right
  * 右边取值
  *   right = mid - 1
  * 左边取值
  *   left = mid + 1
  * 查询条件
  *   >= target值, 则 nums[mid] >= target时, 都减right = mid - 1
  *   >  target值, 则 nums[mid] >  target时, 都减right = mid - 1
  *   <= target值, 则 nums[mid] <= target时, 都加left = mid + 1
  *   <  target值, 则 nums[mid] <  target时, 都加left = mid + 1
  * 结果
  *   求大于(含等于), 返回left
  *   求小于(含等于), 返回right
  * 核心思想: 要找某个值, 则查找时遇到该值时, 当前指针(例如right指针)要错过它, 让另外一个指针(left指针)跨过他(体现在left <= right中的=号), 则找到了
  */
};