/**
 * 
 * @param {string} s 
 * @returns {number}
 */
function balancedStringSplit(s: string): number {
    let leftArray: string[] = [], rightArray: string[] = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            leftArray.push(s[i]);
        }
        if (s[i] === 'R') {
            rightArray.push(s[i]);
        }
        if (leftArray.length === rightArray.length) {
            count++
            leftArray = [];
            rightArray = [];
        }
    }
    return count
};