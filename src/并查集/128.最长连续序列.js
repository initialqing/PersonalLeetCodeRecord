/**
 * @param {number[]} nums
 * @return {number}
 */
class UnionFind {
    constructor(length) {
        this.parent = new Array(length).fill(0).map((_, idnex) => {
            return idnex
        })
        // 记录以当前节点为根节点所含的节点数目
        this.size = new Array(length).fill(1)
        this.rank = new Array(length).fill(0).map((_, index) => {
            return index
        })
    }

    find(index) {
        if (this.parent[index] !== index) {
            this.parent[index] = this.find(this.parent[index]);
        }
        return this.parent[index];
    }
    union(child, parent) {
        const childRoot = this.find(child);
        const parentRoot = this.find(parent);
        if (childRoot === parentRoot) return false
        if (this.rank[childRoot] > this.rank[parentRoot]) {
            this.parent[parentRoot] = childRoot;
            this.size[childRoot] += this.size[parentRoot];

        } else if (this.rank[childRoot] < this.rank[parentRoot]) {
            this.parent[childRoot] = parentRoot
            this.size[parentRoot] += this.size[childRoot]
        } else {
            this.parent[parentRoot] = childRoot;
            this.size[childRoot] += this.size[parentRoot]
            this.rank[childRoot] += 1
        }
    }
    countNum() {
        // let max = 1;
        // for (let i = 0; i < this.size.length; i++) {
        //     if (this.parent[i] === i) {
        //         max = Math.max(max, this.size[i]);
        //     }
        // }
        // return max;
        return Math.max(...this.size)
    }

}
var longestConsecutive = function (nums) {
    const n = nums.length;
    if (n === 0 || n === 1) {
        return n;
    }
    const map = new Map();
    const uf = new UnionFind(n);
    for (let i = 0; i < n; i++) {
        if (map.has(nums[i])) continue;
        if (map.has(nums[i] - 1)) {
            uf.union(i, map.get(nums[i] - 1));
        }
        if (map.has(nums[i] + 1)) {
            uf.union(i, map.get(nums[i] + 1));
        }
        map.set(nums[i], i);
    }
    return uf.countNum()
};