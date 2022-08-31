/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function(people) {
    // 先按照身高的顺序进行排列
    people.sort(compare)
    // 按照前边有多少人比自己身高
    let res = []
    for(let i = 0;i<people.length;i++) {
        // 利用js自带的api
        res.splice(people[i][1],0,people[i])
        // insert(people[i][1],res,people[i])
    }
    return res
};
const compare = (a,b) => {
    if (a[0]===b[0]){
        return a[1] - b[1]
    }
    return -(a[0]-b[0])
}
