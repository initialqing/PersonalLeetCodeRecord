/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let startX = 0, startY = 0;
    // 循环的圈数 , 填充的数字，偏移的数值
    let loop = Math.floor(n/2), count = 1, offset = 1,mid = loop
    // 先进行判断然后loop--
    while (loop-- > 0) {
        // 填充上
        let row = startX, col = startY
        for (;col < n - offset + startY; col++) {
            // 先赋值后count++
            res[row][col] = count++
            console.log(res)
        }
        // 填充最右边一列
        for (;row < startX + n - offset; row++) {
            res[row][col] = count++
        }
        // 填充最下边一列
        for (;col > startY; col--) {
            res[row][col] = count++
        }
        // 填充最左边一列
        for (;row > startX ; row--) {
            res[row][col] = count++
        }
        // 进行第二轮循环 开始的坐标
        startX++
        startY++
        offset+=2
    }
    if(n %2 ===1) {
        // console.log(res)
        res[mid][mid] = count

    }
    return  res
};
