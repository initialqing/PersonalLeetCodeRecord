> map集合转 obj
```javascript
// 先创建一个map集合
let m = new Map()
m.set('I', '1')
m.set('IV', '4')
m.set('V', '5')
m.set('IX', '9')
// 首先是m.entries()
// 返回值为一个可迭代对象
let iterators = m.entries()
// 可以通过Object的内置函数fromEntries对map转换
const object = Object.fromEntries(iterators)
```
> obj转为map集合（map集合的第二种创建方法）
```javascript
// 传入一个entries生成map集合
let obj = {
    'I':'1',
    'IV':'4',
    'V':'5'
}
let newMap = new Map(Object.entries(obj))
console.log(newMap)
```
> Array.from()方法可以将可迭代对象或者类数组对象转为一个真实的数组 比如Map.entries()  或者直接用扩展表达式[...map]
```javascript
// 可迭代对象的遍历
// en = [[],[],[],[]]
for (const [key, value] of en) {
    //直接解构赋值
}
for (const ele of en) {
    //写成一个变量
}
```
