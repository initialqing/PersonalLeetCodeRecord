var reorderLogFiles = function(logs) {
    const logCompare = (log1, log2) => {
        const split1 = split(log1[0], " ");
        const split2 = split(log2[0], " ");
        console.log(split1,split2)
        const isDigit1 = isDigit(split1[1][0]);
        const isDigit2 = isDigit(split2[1][0]);
        // console.log(isDigit1,isDigit2)
        if (isDigit1 && isDigit2) {
            // 按照再数组中的下标进行比较，下标小的在前面
            return log1[1] - log2[1];
        }
        if (!isDigit1 && !isDigit2) {
            const sc = compareTo(split1[1], split2[1]);
            // 判断你内容是否相同不同直接返回结果
            if (sc !== 0) {
                return sc;
            }
            // 内容相同比较第一项的日志标识符
            return compareTo(split1[0], split2[0]);
        }
        // 假如一个是数字一个是字母，第一个是数字就返回1
        return isDigit1 ? 1 : -1;
    };
// 判断字符是否为数字
    const isDigit = (ch) => {
        return parseFloat(ch).toString() === "NaN" ? false : true;
    }

    const compareTo = (left, right) => {
        for (let i = 0; i < Math.min(left.length, right.length); i++) {
            // console.log(left[i])
            if (left[i].charCodeAt() < right[i].charCodeAt()) {
                return -1;
            }
            if (left[i].charCodeAt() > right[i].charCodeAt()) {
                return 1;
            }
        }
        if (left.length === right.length) {
            return 0;
        }
        if (left.length > right.length) {
            return 1;
        }
        return -1;
    }
// 把某个日志文件分割成数组    第一项为日志的头文件
    const split = (str, separator) => {
        const firstItem = str.split(separator)[0];
        const ret = [firstItem];
        const index = str.indexOf(" ");
        ret.push(str.slice(index + 1, str.length));
        // console.log('ret:',ret)
        // console.log('ret:',ret)
        return ret;
    }

    const length = logs.length;
    const arr = new Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        arr[i] = [logs[i], i];
    }
    // console.log(arr)
    arr.sort((a, b) => logCompare(a, b));
    console.log(arr)
    const reordered = new Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        reordered[i] = arr[i][0];
    }
    return reordered;
}
reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])
