function sell(prices) {
    let n = prices.length-1
    // 用来存放最大值 假设 最后一个数最大
    let maxValue = prices[n]
    let res = 0

    for(let i=n-1;i>=0;i--) {
        // 出现数组中的数比当前值大，更新最大值
        if(maxValue<prices[i]) {
            // res = Math.max(res,maxValue)
            maxValue = prices[i]
            // 没有出现比当前值大的则比较当前的结果和最大值与前面小值的差值
        }else {
            res = Math.max(res,maxValue-prices[i])
        }
    }
}

console.log(sell([7,1,5,3,6,4]))
