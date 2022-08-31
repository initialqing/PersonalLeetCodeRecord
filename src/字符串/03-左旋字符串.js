/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
const reverseLeftWords = function(s, k) {
    let strArr = s.split('')
    const reverse = (str,start,end) => {
        let left = start,right = end
        while(left<right) {
            [str[left],str[right]] = [str[right],str[left]]
            left++
            right--
        }
        return strArr
    }
    return reverse(reverse(reverse(strArr,0,k-1),k,strArr.length-1),0,strArr.length-1).join('')
};
