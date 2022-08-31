/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let arr = s.split(' '),res = []

    for(let i = arr.length-1;i>=0;i--) {
        if(arr[i]!=='') {
            res.push(arr[i])
        }
    }
    return res.join(' ')
};
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    // 字符串转数组
    let arr = Array.from(s),res = []
    removeExceptionalSpace(arr)
    let start = 0
    console.log(arr)

    reverse(arr,0,arr.length-1)
    for(let i = 0;i<=arr.length;i++) {
        if(arr[i]===' ' || i===arr.length){
            reverse(arr,start,i-1)
            start  = i+1
        }
    }
    return arr.join('')

};
const removeExceptionalSpace = (strArr) => {
    let slowIndex = 0,fastIndex = 0
    while(fastIndex<strArr.length) {
        if(strArr[fastIndex]===' ' && (fastIndex===0 || strArr[fastIndex-1]===' ')){
            fastIndex++
        }else{
            strArr[slowIndex] = strArr[fastIndex]
            slowIndex++
            fastIndex++
        }
    }
    strArr.length = strArr[slowIndex-1] === ' ' ? slowIndex - 1 : slowIndex
}
const reverse = (arr,start,end) => {
    let left =start,right = end
    while(left<right) {
        [arr[left],arr[right]] = [arr[right],arr[left]]
        right--
        left++
    }
}
