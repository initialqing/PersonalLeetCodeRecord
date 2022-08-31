/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
    if(intervals.length===1) return [intervals[0]]
    intervals.sort((a,b) => {
        return a[0] - b[0]
    })
    console.log(intervals)
    let left = intervals[0][0],right = intervals[0][1],res = []
    for(let i = 1;i<intervals.length;i++) {
        if(intervals[i][0] <= right) {
            left = Math.min(intervals[i][0],left)
            right = Math.max(intervals[i][1],right)
            if(i===intervals.length-1) {
                res.push([left,right])
            }
        }else {
            res.push([left,right])
            left = intervals[i][0]
            right = intervals[i][1]
            if(i===intervals.length-1) {
                res.push([left,right])
            }
        }
    }
    return res
};