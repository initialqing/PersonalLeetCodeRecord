/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function sumNumbers(root: TreeNode | null): number {
    if (!root) {
        return 0
    }
    let sum = 0, resultArray: Array<Array<number>> = []
    const sumArr = (arr: number[]) => {
        let sum = 0
        for (const ele of arr) {
            sum = sum * 10 + ele
        }
        return sum
    }
    const helper = (node: TreeNode, num: number[]):void => {
        // 递归终止的条件,在叶子节点收集结果
        if (node.left === null && node.right === null) {
            resultArray.push(num.slice());
            return;
        }
        if (node.left !== null) {
            num.push(node.left.val);
            helper(node.left, num);
            num.pop();
        };
        if (node.right !== null) {
            num.push(node.right.val);
            helper(node.right, num);
            num.pop();
        };
    }
    const num: number[] = new Array();
    num.push(root.val)
    helper(root, num)
    console.log(resultArray)
    for (const ele of resultArray) {
        sum += sumArr(ele)
    }
    return sum
};

