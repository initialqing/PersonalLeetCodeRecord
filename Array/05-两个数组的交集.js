function merge(nums1,nums2) {
    let m1 = new Map()
    let m2 = new Map()
    let m3 = new Map()
    let arr = new Array()
    // 将第一个数组中的元素存入map中 键：数组元素 数值：出现的次数
    for (let i = 0; i < nums1.length; i++) {
        if (!m1.has(nums1[i])) {
            m1.set(nums1[i],1)
            continue
        }
        // m1[nums1[i]]++
        // let cou = m1.get(nums1[i])
        // cou++
        m1.set(nums1[i],cou)
    }
    for (let k = 0; k < nums2.length; k++) {
        if (!m2.has(nums2[k])) {
            m2.set(nums2[k],1)
            continue
        }
        let couu = m2.get(nums2[k])
        couu++
        m2.set(nums2[k],couu)
    }
    for (let j = 0; j < nums2.length; j++) {
        if (!m1.has(nums2[j])) continue
        let left = m1.get(nums2[j])
        let right = m2.get(nums2[j])
        if (left<right) m3.set(nums2[j],left)
        else if (left>=right) m3.set(nums2[j],right)
    }
    m3.forEach(function (value, key, map) {
        for (let i = 0; i < value; i++) {
            arr.push(key)
        }
    })
    return m3[4]
    // let m = new Map()
    // let arr = new Array()
    // for(let i = 0; i<nums1.length;i++) {
    //     if(m[nums1[i]]) {
    //         m[nums1[i]]++
    //     }else {
    //         m[nums1[i]] = 1
    //     }
    // }
    // for(let j =0;j<nums2.length;j++) {
    //     let count = m[nums2[j]]
    //     if (count>0) {  再第一个数组中存在
    //         arr.push(nums2[j])
    //         m[nums2[j]]--  每次添加之后原来数组中值的数减去1 ，防止加入过多次数的数组
    //     }
    // }
    // return arr
}

console.log(merge([4,9,5],[9,4,9,8,4]))
