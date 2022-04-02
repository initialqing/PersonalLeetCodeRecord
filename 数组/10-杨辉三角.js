function generate(numRows) {
    let ans = []
    let arr = []
    // if(numRows<=2) {
    //     for (let i = 1; i < numRows+1; i++) {
    //         arr.push(1)
    //     }
    //     ans.push(arr)
    //     return ans
    // }
    // arr.splice(0)
    for (let i = 0; i < numRows; i++) {
        // 将要生成的二维数组先用1给填充起来， 数组的长度为循环的次数+1 ， 因为初始值为0
        arr = new Array(i+1).fill(1)
        // 生成的数组长度大于2 就需要计算从而生成新数组，把上面数组的1用新的数值替换
        for (let j = 1; j < arr.length-1; j++) {
            arr[j] = ans[i-1][j-1] + ans[i-1][j]
        }
        ans.push(arr)
    }
    return ans
}

console.log(generate(6))