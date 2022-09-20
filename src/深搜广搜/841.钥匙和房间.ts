/**
 * 深度优先搜索
 * @param {number[][]}rooms 
 * @returns {boolean} 
 */
function canVisitAllRoomsDfs(rooms: number[][]): boolean {
    const visited: boolean[] = new Array(rooms.length).fill(false);

    const dfs = (visited: boolean[], key: number): void => {
        if (visited[key]) return
        visited[key] = true
        // 得到这一层的keys数组
        const keys: number[] = rooms[key]
        for (const key of keys) {
            dfs(visited, key)
        }
    }
    dfs(visited, 0)

    for (const judje of visited) {
        if (!judje) return false
    }
    return true
};

/**
 * 广度优先搜索
 * @param {number[][]}rooms 
 * @returns {boolean}
 */
function canVisitAllRoomsBfs(rooms: number[][]): boolean {
    const visited: boolean[] = new Array(rooms.length).fill(false)
    visited[0] = true
    const queue: Array<number> = []
    queue.push(0)
    while (queue.length) {
        const tempKey = queue.shift()!;
        const keys = rooms[tempKey];
        for (const key of keys) {
            if(!visited[key]) {
                queue.push(key)
                visited[key] = true
            }
        }
    }
    for(const judje of visited) {
        if(!judje) return false
    }
    return true
};
