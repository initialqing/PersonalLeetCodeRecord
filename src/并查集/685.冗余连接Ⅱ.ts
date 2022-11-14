/**
 * 
 * @param {number[][]}edges 
 * @returns {number[]}
 */
const findRedundantDirectedConnection = (edges: number[][]): number[] => {
    const [indexA, indexB] = findDegreeThanOne(edges);
    // 能进入下面两个if判断说明，有两个节点的入度大于1，尝试删除这两个节点看看是不是树。
    if (indexA >= 0 && isTreeRemoveEdge(edges, indexB)) {
        return edges[indexB]
    }
    if (indexB >= 0 && isTreeRemoveEdge(edges, indexA)) {
        return edges[indexA]
    }
    // 前面都没有返回，这说明和冗余连接的题目的题解就一样了
    return redundantEdges(edges)
}
// 找到度大于1的节点，返回其节点对应两条边的索引，比如[[1,2] [3,2],[4,2]]，返回[0,1] 解释: 2节点有两条入度，分别是1,3 第一次出现的边索引为0，第二次出现的边索引为1    
const findDegreeThanOne = (edges: number[][]): number[] => {
    const hash = new Map<number, number>()
    for (let i = 0; i < edges.length; i++) {
        if (!hash.has(edges[i][1])) {
            hash.set(edges[i][1], i)
        } else {
            return [hash.get(edges[i][1])!, i]
        }
    }
    return []
}
// 判断去除一条边之后剩余的边能不能组成一颗树。
const isTreeRemoveEdge = (edges: number[][], removeIndex: number): boolean => {
    const uf = new UnionFind(edges.length + 1);
    for (let i = 0; i < edges.length; i++) {
        // uf.union(edges[i][1], edges[i][0]) 返回的返回值为false说明不是一棵树，说明两个节点没法合并，说明有环。
        if (i !== removeIndex && !uf.union(edges[i][1], edges[i][0])) {
            return false
        }
    }
    return true
}

const redundantEdges = (edges: number[][]): number[] => {
    const uf = new UnionFind(edges.length + 1);
    for (const [parent, child] of edges) {
        // 如果有环，说明可以删去这个生成环的边，冗余连接1的题解
        if (!uf.union(child, parent)) {
            return [parent, child]
        }
    }
    return []
}

class UnionFind {
    parents: number[]
    constructor(size: number) {
        this.parents = Array(size).fill(0).map((_, index) => index)
    }
    // 彻底压缩
    find(index: number) {
        if (this.parents[index] !== index) {
            this.parents[index] = this.find(this.parents[index])
        }
        return this.parents[index]
    }
    union(child: number, parent: number) {
        const childRoot = this.find(child)
        const parentRoot = this.find(parent)
        // 有相同的父节点，说明有环，不能合并。
        if (childRoot === parentRoot) return false
        this.parents[childRoot] = parentRoot
        return true
    }
    same(child: number, parent: number) {
        return this.find(child) === this.find(parent)
    }
}
