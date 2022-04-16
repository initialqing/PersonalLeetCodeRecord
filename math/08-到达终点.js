/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
const reachingPoints = function(sx, sy, tx, ty) {
    while (tx > sx && ty > sy && tx !== ty) {
        if (tx > ty) {
            tx %= ty
        } else {
            ty %= tx
        }
    }
    if (tx===sx && ty===sy) {
        return true
    }else if (tx===sx) {
        return ty > sy && (ty-sy) % tx===0
    }else if (ty===sy) {
        return tx> sx && (tx-sx)%ty===0
    }else {
        return false
    }
}
