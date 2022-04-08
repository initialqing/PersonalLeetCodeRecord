const MinStack = function() {
        this.stack = []
        this.minVal = -Infinity
};
// -2 0 -3 min pop top min
/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // let maxVal = 0
    if (this.stack.length===0) {
        this.minVal = val
        this.stack.push(val)
    }else {
        let min = Math.min(...this.stack)
        if (val<min){
            this.minVal = val
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let temp = this.stack.pop()
    let arr = [...this.stack]
    if (temp===this.minVal) {
        this.minVal = Math.min(...arr)
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let index = this.stack.length-1
    return this.stack[index]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        return this.minVal
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */