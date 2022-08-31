/**
 * 方法：双指针 哪边高度小就移动哪边
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    if(height.length===2) return Math.min(height[0],height[1])
    let left = 0
    let right = height.length-1
    let max = 0
    while(left<right) {
        max =Math.max(max,Math.min(height[left],height[right])*(right-left))
        if(height[left]<height[right]) {
            left++
        }else {
            right--
        }
    }
    return max
};
const maxArea= (height) => {
    //用于存放最大的面积
    let max = 0
    for(let i =0;i < height.length-1;i++) {
        for (let j = i+1;j<height.length;j++) {
            max = Math.max(max,Math.min(height[i],height[j]))
        }
    }
    return max
}
