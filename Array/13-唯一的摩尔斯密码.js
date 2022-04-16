/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
    let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let res = new Set()
    for (let i = 0; i < words.length; i++) {
            let code = ''
        for (const word of words[i]) {
            code += arr[word.charCodeAt()-'a'.charCodeAt()]
        }
        res.add(code)
    }
   return  res.size
};
/**
 * 思路不错的题解
 */
/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {

    const map = {"a":".-","b":"-...","c":"-.-.","d":"-..","e":".","f":"..-.","g":"--.","h":"....","i":"..","j":".---","k":"-.-","l":".-..","m":"--","n":"-.","o":"---","p":".--.","q":"--.-","r":".-.","s":"...","t":"-","u":"..-","v":"...-","w":".--","x":"-..-","y":"-.--","z":"--.."}

    const arr = words.map(item => {
        let str = ''
        for (let i = 0;i < item.length;i ++) {
            str += map[item[i]]
        }
        return str
    })
    let newset = new Set(arr)

    return new Set(arr).size
};
uniqueMorseRepresentations(['a'])
const arr1 = [1, 2, 3],
      arr2 = [3, 4, 5];
// 返回值为false元素就不会保留，返回值为true元素就会保留
let newArr = arr1.filter(v => {return new Set(arr2).has(v)})
//数组交集
console.log(newArr);
//输出：[3]
