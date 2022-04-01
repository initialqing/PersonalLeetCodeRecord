/**
 * 这一道题难死我了cnm的
 * @returns {null}
 */
const sort = () => {
    let root = null
    let temp = nums
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
    // console.log(temp)
    // let s = temp[rootNum]
    // console.log(s)
    insert(del)
    // if(nums%2!==0) {

    // while(nums.length!==0){
    //     let start = 0
    //     let end = nums.length-1
    //     let mid = Math.ceil((start+end)/2)
    //     insert(nums[mid])
    //     nums.splice(mid,1)
    // }
    // }else {
    //     for(let i =0;i<nums.length;i++) {
    //         insert(nums[i])
    //     }
    // }
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
}
