/**
 * @param {number} n
 * @return {number}
 */
const binaryGap = function(n) {
   let temp = n.toString(2)
    let res = 0
    for (let i = 0,preIndex=0; i < temp.length; i++) {
        if (temp[i]==='1'){
            res = Math.max(res,i-preIndex)
            preIndex = i
        }
    }
    return res
};
console.log(binaryGap(22))