const setZeros = matrix => {
    let rows = new Set()
    let column = new Set()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]===0) {
                rows.add(i)
                column.add(j)
            }
        }
    }
    for (const row of rows) {
        for (let i = 0; i < matrix[row].length; i++) {
            matrix[row][i] = 0
        }
    }
    for (const columnElement of column) {
        // console.log(columnElement)
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][columnElement] = 0
        }
    }
 return matrix
}
let res = setZeros([[1,1,1],[1,0,1],[1,1,1]])
console.log(res)
