/** 
 * @param {string} s 
 */
function decodeString(s){
    const resStack = [],reptStack = []
    let res = '',rept = 0
    for(let i = 0;i<s.length;i++) {
        const cur = s.charAt(i)
        if(cur >= 0 && cur<=9) {
            rept = rept * 10 + +cur 
        }else if(cur === '['){
            resStack.push(res)
            reptStack.push(rept)
            rept = 0
            res = ''
        }else if(cur ===']') {
            const count = reptStack.pop()
            let temp = ''
            while(count-->0) {
                temp+=res
            }
            res = resStack.pop() + temp
        }else {
            res+=cur
        }
    }
    return res
};