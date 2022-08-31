/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function(s, k) {
    const reverse = (strarr) => {
        let arr = []
        for(let i = 0;i<strarr.length;i++) {
            let str = strarr[i].split('')
            let left = 0,right = k - 1
            console.log(str)
            while(left<right) {
                [str[left],str[right]] = [str[right],str[left]]
                right--
                left++
            }
            arr.push(str.join(''))
        }
        return arr
    }
    let c = Math.floor(s.length/(2*k))
    let tempArr = [],left = 0,right = 2*k
    while(c+1>0) {
        tempArr.push(s.substring(left,right))
        left+=2*k
        right+=2*k
        c--
    }
    return reverse(tempArr).join('')
};
