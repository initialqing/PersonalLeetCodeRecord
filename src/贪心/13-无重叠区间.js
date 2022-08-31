/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => {
        return a[1] - b[1]
    })
    // console.log(intervals)
    // 因为区间已经排好序所以判断区间是否重叠可以简单写
    let count = 1
    let left = intervals[0][0],right = intervals[0][1]
    for(let i = 1;i<intervals.length;i++){
        // 假如两个区间不重叠
        if(intervals[i][0] >= right || intervals[i][1] <= left) {
            count++
            left = intervals[i][0];right = intervals[i][1]
        }else {
            // 两个区间重叠
            left = Math.max(left,intervals[i][0])
            right = Math.min(right,intervals[i][1])
        }
    }
    return intervals.length-count
};