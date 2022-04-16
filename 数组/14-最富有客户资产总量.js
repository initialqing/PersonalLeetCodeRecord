/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
    let maxVal = 0
    let temp = 0
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            temp+=accounts[i][j]
        }
        if (temp>maxVal) {
            maxVal = temp
        }
    }
    return  maxVal
};
