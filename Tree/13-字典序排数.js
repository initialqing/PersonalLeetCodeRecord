const lexicalOrder = (n) => {
    let res = []
    let num = 1
    while (res.length < n) {
        if (num <= n) {
            res.push(num)
            num *= 10
        } else {
            while (num % 10 === 9 || num > n) {
                num = Math.floor(num / 10)
            }
            num++
        }
    }
    return res
}
console.log(lexicalOrder(13))