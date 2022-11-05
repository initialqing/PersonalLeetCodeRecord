function isNumber(s: string): boolean {
    s = s.trim();
    let hasE = false;
    let hasDot = false;
    let hasNum = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'e' || s[i] === 'E') {
            if (hasE || !hasNum) return false;
            hasE = true;
            hasNum = false;
        } else if (s[i] === '.') {
            if (hasDot || hasE) return false;
            hasDot = true;
        } else if (s[i] === '+' || s[i] === '-') {
            if (i !== 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') return false;
        } else if (s[i] >= '0' && s[i] <= '9') {
            hasNum = true;
        } else {
            return false;
        }
    }
    return hasNum;
};