/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let freq = new Map();
    
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    let result = [];
    
    while (freq.size > 0) {
        let row = [];
        
        for (let [num, count] of freq) {
            row.push(num);
            
            if (count === 1) {
                freq.delete(num);
            } else {
                freq.set(num, count - 1);
            }
        }
        
        result.push(row);
    }
    
    return result;
};