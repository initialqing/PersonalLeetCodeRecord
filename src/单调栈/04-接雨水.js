/**
 * @param {number[]} height
 * @return {number}
 * 直接模拟，用每个柱子的左右两侧的最大高度值中较小的一个 减去当前柱子的大小，大于0就是当前柱子能接到的雨水的多少。
 */
const trap = function(height) {
    let sum = 0,heightL = 0,heightR = 0
    for (let i = 0; i < height.length; i++) {
        if(i===0 || i===height.length-1) continue
        // 寻找当前柱子右侧的最大值
        for (let j = i+1; j < height.length; j++) {
            if(height[j]>heightR) heightR = height[j]
        }
        // 寻找当前柱子左侧的最大值
        for (let k = i-1; k >=0 ; k--) {
            if(height[k]>heightL) heightL = height[k]
        }
        // 计算当前柱子能接到的雨水的数量。
        const water = Math.min(heightR,heightL) - height[i]
        if (water > 0) {
            sum+=water
        }
        heightR = 0;heightL = 0
    }
    return  sum
};
/**
 * @param {number[]} height
 * @return {number}
 * 动态规划：
 *
 */
const trap = function(height) {
    let sum = 0,
    // 存放每个柱子左侧雨水的最大值
    maxheightL = new Array(height.length).fill(0),
    // 存放每个柱子右侧雨水的最大值
    maxheightR = new Array(height.length).fill(0)
    // 初始化
    maxheightL[0] = height[0]
    for(let i = 1;i<height.length;i++) {
        // 递推公式
        maxheightL[i] = Math.max(maxheightL[i-1],height[i])
    }
    // 初始化
    maxheightR[height.length-1] = height[height.length-1]
    for(let j = height.length-2;j>=0;j--) {
        // 递推公式
        maxheightR[j] = Math.max(maxheightR[j+1],height[j])
    }

    for (let i = 1; i < height.length; i++) {
        const water = Math.min(maxheightR[i],maxheightL[i]) - height[i]
        if(water>0) {
            sum+=water
        }

    }
    return  sum
};
