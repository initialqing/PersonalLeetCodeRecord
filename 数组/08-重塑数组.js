function reShape(mat,r,c) {
    if (mat.length*mat[0].length!==r*c) return mat
    let ans = []
    // let arr = []
    // for (let i = 0; i < mat.length; i++) {
    //     for (let j = 0; j < mat[i].length; j++) {
    //         if (arr.length<c) {
    //             arr.push(mat[i,j])
    //         }else {
    //             ans.push(arr)
    //             arr = [mat[i,j]]
    //         }
    //     }
    // }
    // ans.push(arr)
    // return  ans
    let arr = mat.flat()
    for (let i = 0; i < r; i++) {
        ans.push(arr.splice(0,c))
    }
    return  ans
}
let testArr = [[1,2],[3,4]]
console.log(reShape(testArr,4,1))