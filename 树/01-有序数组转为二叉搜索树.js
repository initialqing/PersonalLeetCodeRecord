/**
 * 这一道题难死我了cnm的
 * @returns {null}
 */
const sort = () => {
    /**
     *
     */
    let root = null
    let n = nums.length
    let rootNum = Math.floor(n/2)
    let del = nums.splice(rootNum,1)
    const insert = (val) => {
        let newNode = new TreeNode(val)
        if(root===null) {
            root = newNode
        }else{
            insertTree(root,newNode)
        }
    }
    // 给一个根节点，传入一个新节点，然后在树中插入这个节点
    const insertTree = (root,node) =>{
        if(root.val>node.val) {
            if(root.left===null) {
                root.left = node
            }else {
                insertTree(root.left,node)
            }
        }else {
            if(root.right===null) {
                root.right = node
            }else {
                insertTree(root.right,node)
            }
        }
    }
    insert(del)
// ------------------------------------------------------------
// ------------------------------------------------------------
    const arr = (nums) => {
        while(nums.length!==0){
            let start = 0
            let end = nums.length-1
            let mid = Math.ceil((start+end)/2)
            insert(nums[mid])
            nums.splice(mid,1)
        }
    }
    let arr1 = []
    let arr2 = []
    for(let i =0;i<rootNum;i++){
        arr1.push(nums[i])
    }
    for(let i =rootNum;i<nums.length;i++){
        arr2.push(nums[i])
    }
    arr(arr1)
    arr(arr2)
    return root
    /**
     * 抄的题解
     * splice(start,delCount,item)
     * 1.不指定item则将分割数组，返回值为分割后的数组
     * 2.指定item则返回值为删除的数组
     * 3.如添加元素则不返回值
     */
    // 方法返回值为删除的元素、添加元素则没有返回值
    // 使用方法后数组元素发生改变
    // splice(0,3,'item') 表示删除后再加入 返回值为删除部分的数组
const sortedArrayToBST = function (nums) {
    // 由于要求高度平衡，因此我们取中间的元素作为根节点
    if (!nums.length) return null
    // 取中间
    const mid = nums.length >> 1
    // 构建新的树，根节点为中间的
    const root = new TreeNode(nums[mid])
    // 分离递归左右树
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))
    return root
    }
}
