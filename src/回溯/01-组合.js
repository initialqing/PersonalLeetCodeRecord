/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
    let res = []
    let temp = []
    const backtrack = (n,k,start) => {
        if(temp.length===k) {
            res.push([...temp])
            return
        }
        // 减枝 n-(k-temp.length)+1
        for(let i = start;i<=n-(k-temp.length)+1;i++) {
            temp.push(i)
            backtrack(n,k,i+1)
            temp.pop()
        }
    }
    backtrack(n,k,1)
    return res
};
