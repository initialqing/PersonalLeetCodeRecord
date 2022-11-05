function countDigitOne(n) {
    let count = 0
    let rem = 0
    for(let i = 0;n !==0;i++) {
        let  temp = Math.floor(n/10)
        if(10 * temp + 1 < n) temp ++
        else if(10 *  temp + 1 === n) {
            count += rem + 1
            console.log(n,temp)
        }
        count += (temp * Math.pow(10,i))
        rem += (n % 10 * Math.pow(10,i))
        n = Math.floor(n/10)
    }
    return count
};
countDigitOne(3421)
