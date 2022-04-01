class queueElement {
    constructor(ele, pri) {
        this.ele = ele
        this.pri = pri
    }
}
class PriorityQueue {
    constructor(item) {
        this.item = item
    }
    // 插入方法
    insert(ele, pri) {
        let q = new queueElement(ele, pri)
        if (this.item.length === 0) {
            this.item.push(q)
        } else {
            let flag = false
            for (let index = 0; index < this.item.length; index++) {
                if (q.pri < this.item[index].pri) {
                    this.item.splice(index, 0, q)
                    flag = true
                    break
                }
                if (!flag) {
                    this.item.push(q)
                }
            }
        }

    }
}
let prior = new PriorityQueue([])

console.log(prior.item)
