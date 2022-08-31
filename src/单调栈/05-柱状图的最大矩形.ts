/**
 * @param heights
 * 动态规划
 */
function largestRectangleArea(heights: number[]): number {
    // @ts-ignore
    let minLeftArr: Array<number> = new Array<number>(heights.length).fill(0);
    // @ts-ignore
    let minRightArr: Array<number> = new Array<number>(heights.length).fill(0);
    minLeftArr[0] = -1;
    minRightArr[heights.length - 1] = heights.length

    for (let i = 1; i < heights.length; i++) {
        let index = i - 1
        while (index >= 0 && heights[index] >= heights[i]) {
            // 假如这个数左边的数比这个数大 ,更新索引，这个索引是什么含义呢？
            // 就是第一个小于左边的这个比你大的数的索引。
            // 假如i对应的数值为2，那么6比2大，所以更新的索引就为minLeftArr[3]，第一次比6小的数对应的索引是1。
            index = minLeftArr[index]
        }
        minLeftArr[i] = index
    }

    for (let i = heights.length - 2; i >= 0; i--) {
        let index = i + 1
        while (index <= heights.length - 1 && heights[index] > heights[i]) {
            index = minRightArr[index]
        }
        minRightArr[i] = index
    }
    let res = 0
    for (let i = 0; i < heights.length; i++) {
        const area = heights[i] * (minRightArr[i] - minLeftArr[i] - 1)
        res = Math.max(area, res)
    }
    return res
};

/**
 * 双指针超时
 * @param heights
 */
function largestRectangleAreaDp(heights:number[]):number {
    let sum = 0
    for (let i = 0; i < heights.length; i++) {
        let left = i, right = i

        for (; left >= 0; left--) {
            if (heights[left] < heights[i]) break
        }

        for (; right < heights.length; right++) {
            if (heights[right] < heights[i]) break
        }

        const width = right - left - 1
        const height = heights[i]
        sum = Math.max(sum, width * height)
    }
    return sum
}
