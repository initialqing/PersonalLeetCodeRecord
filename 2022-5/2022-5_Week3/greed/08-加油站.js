/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function(gas, cost) {
    let tempGas = 0,length = gas.length
    // 逐步测试每一个加油站是否可行’
    for(let i = 0;i<gas.length;i++) {
        // 剩余油量
        tempGas = gas[i] - cost[i]
        // 模拟以i加油站为起点
        let index = (i + 1) % gas.length
        //每个加油站有初始值,模拟一圈，利用了%
        while(tempGas>0 && index!==i) {
            tempGas += gas[index] - cost[index]
            index = ( index + 1 ) % gas.length
        }
        if(tempGas>=0&&index===i) {
            return i
        }
    }

    return -1
};
