/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
    const map = new Map();
    const paragraphArr = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ').split(' ');
    for(let item of paragraphArr){
        if(item !== '' && !banned.includes(item)){
            map.set(item, (map.get(item) || 0) + 1);
        }
    }
    const arr = [...map].sort((a,b) => b[1] - a[1]);
    return arr[0][0];
};
/**
 * 自己的垃圾代码 ,数组转为map集合写的很垃圾
 *
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
    let arr = paragraph.split(' ')
    let m = new Map()
    for(let i = 0;i<arr.length;i++) {
        if(banned.indexOf(arr[i])===-1) {
            if(m.has(arr[i])) {
                m.set(arr[i],m.get(arr[i])+1)
            }else {
                m.set(arr[i],1)
            }
        }
        console.log(m)
    }
};
