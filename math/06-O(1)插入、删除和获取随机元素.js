/**
 * 2022-4-13每日一题
 * 自己写的击败了8%
 */
// class RandomizedSet {
//     constructor() {
//         this.res = []
//     }
//     insert (val){
//         if (this.res.includes(val)) {
//             return false
//         }else {
//             this.res.push(val)
//             return true
//         }
//     }
//     remove(val) {
//         if (!this.res.includes(val)) {
//             return false
//         }else {
//             let index = this.res.indexOf(val)
//             this.res.splice(index,1)
//         }
//     }
//     getRandom(){
//         let arr = [...this.res]
//         if (arr.length===1) {
//             return arr[0]
//         }
//         let index = Math.floor(Math.random()*arr.length)
//         return arr[index]
//     }
// }
class RandomizedSet {
    constructor() {
        this.map = new Map()
        this.arr = new Array()
    }

    insert(val) {
        if (!this.map.has(val)) {
            this.arr.push(val)
            this.map.set(val, this.arr.length)
            return true
        }
        return false
    }

    remove(val) {
        if (this.map.has(val)) {
            // 得到数组的最后一个值
            const len = this.arr.length
            const swapVal = this.arr[len-1]
            // 获取插入这个元素时候的数组长度，也就是数组所在的索引
            let index = this.map.get(val)
            // 将数组的最后一个元素与要删除的元素交换
            // 在map中设置索引和值
            this.map.set(swapVal,index)
            this.arr[index] = swapVal
            this.arr.pop()
            this.map.delete(val)
            return true
        }
        return false
    }
}