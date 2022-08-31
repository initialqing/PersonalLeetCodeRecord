/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // 定义单调队列维护最大值
    class Myqueue {
        queue;
        constructor(){
            this.queue = []
        }
        //  单调队列入队逻辑
        dequeue (val) {
            // 取队列入口元素，入口元素小就让新得元素入队，始终保持队口的出队元素为最大值【 3 , -1】
            let back = this.queue[this.queue.length-1]
            while(back!==undefined && back < val) {
                this.queue.pop()
                back = this.queue[this.queue.length-1]
            }
            this.queue.push(val)
        }
        // undequeue 出队
        // 队列出队的逻辑，假如窗口中移除的元素与队列的出口处元素一致的话就将出口的元素删除。
        undequeue (val) {
            let front = this.queue[0]
            if(val===front) {
                return this.queue.shift()
            }
        }
        // 返回队列的第一个值 也就是窗口最大值
        front (){
            return this.queue[0]
        }
    }
    let res = []
    let myqueue = new Myqueue()
    let i = 0;j = 0
    while(j<k) {
        myqueue.dequeue(nums[j++])
    }
    res.push(myqueue.front())
    while(j<nums.length) {
        myqueue.dequeue(nums[j])
        myqueue.undequeue(nums[i])
        res.push(myqueue.front())
        i++
        j++
    }
    return res
};
