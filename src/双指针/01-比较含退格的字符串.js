/**
 *
 * 解法1：双指针 解法2：遇到#就删除一个字母 解法3:栈
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
    let i = S.length - 1,
        j = T.length - 1,
        skipS = 0,
        skipT = 0;
    // 大循环
    while(i >= 0 || j >= 0){
        // S 循环
        while(i >= 0){
            if(S[i] === '#'){
                skipS++;
                i--;
            }else if(skipS > 0){
                skipS--;
                i--;
            }else break;
        }
        // T 循环
        while(j >= 0){
            if(T[j] === '#'){
                skipT++;
                j--;
            }else if(skipT > 0){
                skipT--;
                j--;
            }else break;
        }
        if(S[i] !== T[j]) return false;
        i--;
        j--;
    }
    return true;
};
backspaceCompare('ab#c','ac')