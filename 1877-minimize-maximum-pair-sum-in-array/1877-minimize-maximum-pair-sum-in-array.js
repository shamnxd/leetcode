/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    let left = 0;
    let right = nums.length - 1;
    let maxSum = 0;

    while (left < right) {
        const pairSum = nums[left] + nums[right];
        maxSum = Math.max(maxSum, pairSum);
        
        left++;
        right--;
    }
    
    return maxSum;
};