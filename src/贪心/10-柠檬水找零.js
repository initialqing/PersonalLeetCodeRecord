/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
    let billCount = new Array(3).fill(0)
    for (let i = 0; i < bills.length; i++) {
        if (bills[i]<=5) {
            // 不需要找零
            billCount[0]++

        }else if(bills[i]===10){
            // 增加一个10 消耗一个5
            if(billCount[0]>0) {
                billCount[0]--
                billCount[1]++
                continue
            }
            return false
        }else{
            // 先消耗一个10 + 5 或者消耗三个5
            if(billCount[0]>0&&billCount[1]>0) {
                billCount[0]--
                billCount[1]--
                continue
            }else if(billCount[0]>=3){
                billCount[0] = billCount[0]-3
                continue
            }
            return false
        }
    }
    return true
};
