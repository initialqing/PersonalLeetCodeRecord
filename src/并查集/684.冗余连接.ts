/**
 * 无向图连通性考虑并查集 ，有向图依赖性深搜、广搜、拓扑排序。
 * @param {number[][]} edges 边的数组集合，每个元素为边的两个节点 
 * @returns {number[]}
 */
function findRedundantConnection(edges: number[][]): number[] {
    // 并查集
    // 初始化
    for (let i = 0; i < father.length; i++) {
        father[i] = i
    }
    for (let i = 0; i < edges.length; i++) {
        if (same(edges[i][0], edges[i][1])) {
            return edges[i]
        } else {
            union(edges[i][0], edges[i][1])
        }
    }
    return []
};

// 并查集模板
const father: number[] = new Array(1005).fill(0)

// 找到某一个节点的根节点
function find(x: number): number {
    // 彻底压缩
    if (father[x] !== x) {
        father[x] = find(father[x])
    }
    return father[x]
}
// 判断两个节点是不是属于同一个父节点
function same(x: number, y: number) {
    const fatherX = find(x)
    const fatherY = find(y)
    return fatherX === fatherY
}
// 合并两个集合
function union(x: number, y: number) {
    const collectionA = find(x)
    const collectionB = find(y)
    if (collectionA === collectionB) return
    // 集合B挂在到集合A上
    father[collectionB] = collectionA
}