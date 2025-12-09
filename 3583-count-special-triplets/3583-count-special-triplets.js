/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialTriplets = function(nums) {
    const MOD = 1e9 + 7;
    let n = nums.length;
 
    let right = new Map();
    for (let x of nums) {
        right.set(x, (right.get(x) || 0) + 1);
    }
    
    let left = new Map();
    let result = 0;
    
    for (let j = 0; j < n; j++) {
        right.set(nums[j], right.get(nums[j]) - 1);
        
        let need = nums[j] * 2;
        
        let leftCnt = left.get(need) || 0;
        let rightCnt = right.get(need) || 0;
        
        result = (result + leftCnt * rightCnt) % MOD;

        left.set(nums[j], (left.get(nums[j]) || 0) + 1);
    }

    return result;
};
