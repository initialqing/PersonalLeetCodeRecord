/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let cadyVec = new Array(ratings.length).fill(1)
    // 先考虑左边比右边小的情况
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i-1]<ratings[i]) {
            cadyVec[i] = cadyVec[i-1] + 1
        }
    }

    // 考虑左边比右边大的情况，从后往前遍历
    for(let i = ratings.length-2;i>=0;i--) {
        if(ratings[i]>ratings[i+1]){
            cadyVec[i] = Math.max(cadyVec[i],cadyVec[i+1] + 1)
        }
    }
    return cadyVec.reduce((a,b) => a+b,0)
};
