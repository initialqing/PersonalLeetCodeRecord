/**
 * 思路：哈希表映射，取最小出现次数
 * @param words
 */
// 输入: words = ["bella","label","roller"]
// 输出: ["e","l","l"]
/**
 * bella:  0 0 0 0 0 0 ... 0 0    26个索引
 * label:  0 0 0 0 0 0 ... 0 0
 * roller:  0 0 0 0 0 0 ... 0 0
 * minIndex: 0 0 0 0 0 0 0 0
 * @param words
 */
function commonChars(words: string[]): string[] {
    let res: string[] = []
    let size = 26
    let hash: number[] = new Array(size).fill(0)
    let a: number = 'a'.charCodeAt(0)

    const firstWord = words[0].split('')
    // 初始化第一个字符串的hash，用于后面的迭代。
    for (let i = 0; i < firstWord.length; i++) {
        const index = firstWord[i].charCodeAt(0)
        hash[index - a] += 1
    }
    // 初始化其他的hash数组并从索引为1开始遍历剩余的字符串。
    let otherHash: number[] = new Array(size).fill(0)
    for (let i = 1; i < words.length; i++) {
        // 对数组中的某一个字符出进行操作，存放与其他的hash数组中
        for (let j = 0; j < words[i].length; j++) {
            const idx = words[i][j].charCodeAt(0)
            otherHash[idx - a] += 1
        }
        // 对hash值进行更新 取对应出现次数较少的那一个数值
        for (let k = 0; k < 26; k++) {
            hash[k] = Math.min(hash[k], otherHash[k])
        }
        // 重置存放其他字符串的哈希数组。
        otherHash.fill(0)
    }
    // 此时hash数组中的索引为字符的Ascll码 - 'a' 所以需要还原成结果需要的样子
    for (let i = 0; i < size; i++) {
        while (hash[i] > 0) {
            res.push(String.fromCharCode(i + a))
            hash[i]--
        }
    }
    return res
};
