function findNthDigit(n: number): number {
    let digit:number = 1,start:number = 1,count = digit * start * 9

    while(n > count) {
        n -= count
        digit += 1
        start *= 10
        count = start * digit * 9
    }

    let number = start + Math.floor((n-1)/digit)
    
    let s = new String(number)

    return +s[(n-1) % digit]
    
};