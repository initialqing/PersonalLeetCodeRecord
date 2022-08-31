/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    if(!firstList.length||!secondList.length) return []
    let res = []
    let left = 0,right = 0,m = firstList.length,n = secondList.length
    while(left < m && right < n) {
        // 交集区间左边取大的，右边取小的
        let start = Math.max(firstList[left][0],secondList[right][0])
        let end = Math.min(firstList[left][1],secondList[right][1])
        if(start<=end) {
            res.push([start,end])
        }
        if(firstList[left][1]<secondList[right][1]) {
            // 右边区间小的+1
            left++
        }else{
            right++
        }
    }
    return res
};
let test1 = [[0,2],[5,10],[13,23],[24,25]]
let test2 = [[1,5],[8,12],[15,24]]
intervalIntersection(test1,test2)
