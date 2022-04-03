/**
 * @param {number[]} nums
 */
let Solution = function(nums) {
    this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // 浅拷贝不会影响原来数组的值 直接赋值就为深拷贝
    let temp = [...this.nums]
    let res = []
    while (temp.length>0) {
        let randomIndex = Math.floor(Math.random()*(temp.length))
        res.push(temp.splice(randomIndex,1)[0])
        // console.log(randomIndex)
        // nums.length-=1
    }
    return res
};

let solution = new Solution([1,2,3]);
let numbers = solution.shuffle();
console.log(numbers)
console.log(solution.reset())
