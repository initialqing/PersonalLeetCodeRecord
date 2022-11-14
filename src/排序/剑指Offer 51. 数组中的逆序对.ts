function reversePairs(nums: number[]): number {
    if (!nums.length) return 0
    let count = 0
    function mergeSort(front: number, end: number) {
        if (front === end) {
            return [nums[front]]
        }
        let mid = front + ((end - front) >> 1)
        let leftArr = mergeSort(front, mid)
        let rightArr = mergeSort(mid + 1, end)

        let left = 0, right = 0, cur = 0
        let temp = new Array(end - front + 1).fill(0)
        
        while (left < leftArr.length && right < rightArr.length) {
            if (leftArr[left] <= rightArr[right]) {
                temp[cur++] = leftArr[left++]
            } else {
                temp[cur++] = rightArr[right++]
                count += leftArr.length - left
            }
        }

        while (left < leftArr.length) {
            temp[cur++] = leftArr[left++]
        }
        while (right < rightArr.length) {
            temp[cur++] = rightArr[right++]
        }
        return temp
    }
    mergeSort(0, nums.length - 1)
    return count
};