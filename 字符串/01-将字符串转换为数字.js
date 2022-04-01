
function trans(s) {
    s = s.trim()
    let res = 0
    // 默认正数
    let symbol = 1
    for (let i =0;i < s.length; i++){
        if (s[0]==='-' && i===0) {
            symbol = -1
            continue
        }else if (s[0]==='+' && i===0){
            continue
        }
        if (s[i]>=0 && s[i] <=9 && s[i]!== ''){
            res = res*10 + (s[i]-0)
            if (res*symbol<=-2147483648) return -2147483648
            else if (res*symbol>=2147483648) return 2147483648
        }
    }
    return res * symbol
}

console.log(trans('-42'))
