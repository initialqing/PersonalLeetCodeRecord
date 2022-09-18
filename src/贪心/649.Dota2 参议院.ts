// 胜利栈，迭代过程为当遇到两个不一样的字母的时候后者会干掉前者。
function predictPartyVictory(senate: string): string {
    const stack: string[] = [], queue: string[] = senate.split('')
    while (queue[0]) {
        const temp = queue.shift()

        if (!stack.length || stack[stack.length - 1]) {
            stack.push(temp!)
        } else {
            queue.push(stack.pop()!)
        }
    }
    return stack[0] === 'R' ? 'Radiant' : 'Dire'
};

// 代码随想录的解题过程
const predictVictory = (senate: string): string => {
    let flag = 0;
    let R = true,D = true,senateArr:Array<string | number> = senate.split('');
    
    while(R && D) {
        R = false
        D = false
        for(let i = 0;i<senate.length;i++) {
            if(senateArr[i] === 'R'){
                if(flag < 0) {
                    senateArr[i] = 0
                }else {
                    R = true
                }
                flag++;
            }
            if(senateArr[i] === 'D'){
                if(flag > 0) {
                    senateArr[i] = 0
                }else {
                    D = true;
                }
                flag--;
            }
        }

    }
    return R === true ? 'Radiant' : 'Dire'
}