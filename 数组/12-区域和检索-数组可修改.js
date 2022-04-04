class treeNode {
    constructor(start, end) {
        this.left = null
        this.right = null
        this.sum = null
        this.start = start
        this.end = end
    }
}
let root = null
/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
    this.root = this.buildTree(nums, 0, nums.length - 1)
    console.log(this.root.sum)
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    this.updateVal(this.root, index, val)
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.sum(this.root,left,right)
};
NumArray.prototype.buildTree = function (nums, start, end) {
    if (start > end) {
        return null
    } else if (start === end) {
        let node = new treeNode(start, end);
        node.sum = nums[start]
        return node
    } else {
        let node = new treeNode(start, end);
        let mid = start + (end - start) / 2
        mid = Math.floor(mid)
        node.left = this.buildTree(nums, start, mid)
        node.right = this.buildTree(nums, mid + 1, end)
        node.sum = node.left.sum + node.right.sum
        return node
    }
}
NumArray.prototype.updateVal = function (root, index, val) {
    if (root.start === root.end) {
        root.sum = val
        return
    } else {
        let mid = root.start + (root.end - root.start) / 2
        mid = Math.floor(mid)
        if (index <= mid) {
            this.updateVal(root.left, index, val)
        } else {
            this.updateVal(root.right, index, val)
        }
        root.sum = root.left.sum + root.right.sum
    }
}
NumArray.prototype.sum = function (root, left, right) {
    if (left === root.start && right === root.end) {
        return root.sum
    } else {
        let mid = root.start + (root.end - root.start) / 2
        mid = Math.floor(mid)
        if (right <= mid) {
            return this.sum(root.left,left,right)
        } else if (left > mid){
            return  this.sum(root.right,left,right)
        }else {
            return this.sum(root.left,left,mid) + this.sum(root.right,mid+1,right)
        }

    }
}
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
