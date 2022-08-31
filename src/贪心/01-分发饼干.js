/**
 * @param {number[]} g.
 *
 */
var findContentChildren = function(childrens, cookies) {
    let count = 0;
    childrens.sort((a,b) =>  a-b)
    cookies.sort((a,b) =>  a-b)
    // let index= cookies.length-1
    // 小孩再变化遇到满足要求的饼干，再看下一个饼干
    // // for(let i = childrens.length-1;i>=0;i--) {
    // //     console.log(0)
    // //     if(index >=0 && cookies[index] >= childrens[i]) {
    // //         count++
    // //         index--
    // //     }
    // // }
    // return count
    let index = 0
    for(let i = 0;i<cookies.length;i++) {
        // 饼干在一直在变，遇到满足要求的饼干，孩子的索引就++
        if(index < childrens.length && childrens[index] <= cookies[i]  ) {
            // count++
            index++
        }
    }
    return index
};
