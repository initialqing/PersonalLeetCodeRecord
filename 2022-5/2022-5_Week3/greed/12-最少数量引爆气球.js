/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function(points) {
    // 先按照从小到大的顺序进行排列
    points.sort((a,b) => {
        return a[0] - b[0]
    })
    let left = points[0][0],right = points[0][1]
    let res = 1//  记录箭的数量
    // 从前往后便利
    for(let i = 1;i<points.length;i++) {
        // 两个要有相交部分
        if(points[i][0] <= right && points[i][1] >= left) {
            left = Math.max(left,points[i][0])
            right = Math.min(right,points[i][1])
            continue
        }else{
            res++
            left = points[i][0]
            right = points[i][1]
        }
    }
    // console.log(res)
    return res
};