/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    if(numRows===1) return s
    let arr = new Array(numRows).fill('')
    for(let i = 0,down=true,row=0;i<s.length;i++) {
        arr[row] += s[i]
        if(down) {
            row++
        }else {
            row--
        }
        if(row===numRows-1) {
            down  = false
        }else if(row===0) {
            down = true
        }
    }
    return arr.join('')
};