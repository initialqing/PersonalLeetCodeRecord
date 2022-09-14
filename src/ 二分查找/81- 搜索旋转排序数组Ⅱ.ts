function search(nums: number[], target: number): number {
    // 定义左右指针
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] === nums[left]) {
            left++
            continue
        }
        // 落在同一个数组的情况下,同时落在数组1或者数组2
        if (nums[mid] > nums[left]) {
            // target在left 和 mid之间,在一个我完全有序的区间中查找
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
                // target在mid和right之间，可能在数组1或者在数组2
            } else if (target > nums[mid] || target < nums[left]) {
                left = mid + 1
            }
            // 不在同一个数组的情况，left在数组1 mid落在数组2
        } else if (nums[mid] < nums[left]) {
            // target在mid和right 的有序区间之间
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
                // target 在 left 和mid之间
            } else if (target < nums[mid] || target > nums[right]) {
                right = mid - 1
            }
        }
    }
    return -1
}