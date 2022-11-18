// https://leetcode.cn/problems/maximal-rectangle/solution/java-by-msang-tel-7f51/


/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalRectangle = function(matrix) {
    // 以第i行和第j列结尾行的长度，和列的长度
    let row = new Array(matrix.length+1).fill(0).map(_ => new Array(matrix[0].length+1).fill(0))
    let col = new Array(matrix.length+1).fill(0).map(_ => new Array(matrix[0].length+1).fill(0))
    let max = 0
    for(let i = 1;i<=matrix.length;i++) {
        for(let j = 1;j<=matrix[0].length;j++) {
            // 更新dp数组
            if(matrix[i-1][j-1] === '1') {
                row[i][j] = row[i][j-1] + 1
                col[i][j] = col[i-1][j] + 1
            }
            // 计算面积
            let minRow = row[i][j]
            for(let k = 0;k<col[i][j];k++) {
                // console.log(i,j,k)455
                if(row[i-k][j] < minRow) {
                    minRow = row[i-k][j]
                }
                if(max < minRow*(k+1) ) {
                    max = minRow*(k+1)
                }
            }
        }
    }
    return max
};
// 看成84题的变种，计算以每一层为底的heights数组传给84题的题解更新最大面积
// https://leetcode.cn/problems/maximal-rectangle/solution/dai-ma-jian-ji-yi-chong-huan-bu-cuo-de-j-k1p3/ 

var maximalRectangle = function (matrix) {
    if (matrix.length == 0) return 0;

    let res = 0;
    //初始化heights数组
    let heights = new Array(matrix[0].length).fill(0);
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] == '1' ) heights[col] += 1;
            else heights[col] = 0;
        }
        //求出每一层的 heights[] 然后传给84题的函数
        //更新一下最大矩形面积 largestRectangleArea为84题的函数
        res = Math.max(res, largestRectangleArea(heights));
    }
    return res;
};
